import React, { Component } from "react";
import Rnd from "react-rnd";
import {findHighestZIndex} from "../helpers";

class Text extends Component {
    constructor() {
        super();
    }

    handleDragStop(event, item) {
        var div = document.getElementById(item._id).getBoundingClientRect();
        item.x = div.left;
        item.y = div.top;

        this.props.updateItem(item);
    }

    handleResizeStop(event, item) {
        item.width = event.srcElement.offsetParent.offsetWidth;
        item.height = event.srcElement.offsetParent.offsetHeight;

        this.props.updateItem(item);
    }

    handleClick(event, item) {
        let h = findHighestZIndex('item-container');
        item.zIndex = parseInt(h) + 1;
        this.props.updateItem(item);
        let div = document.getElementById(item._id);
        div.style.zIndex = parseInt(h) + 1;
    }

    deleteItem(e, item) {
        this.props.deleteItem(e);
    }

    render() {
        const html =
            <Rnd
                extendsProps={{
                    id: this.props.item._id,
                    className: "item-container",
                    onClick: () => {
                        this.handleClick(event, this.props.item)
                    },
                }}
                default={{
                    x: this.props.item.x,
                    y: this.props.item.y,
                    width: this.props.item.width,
                    height: this.props.item.height,
                }}
                minWidth={50}
                minHeight={20}
                z={this.props.item.zIndex}
                style={{
                    position: "absolute", background: "#fff", padding: "5px", border: "1px solid #000000", overflow: "hidden"
                }}
                onDragStop=
                    {
                        () => { this.handleDragStop(event, this.props.item) }
                    }
                onResizeStop=
                    {
                        () => { this.handleResizeStop(event, this.props.item) }
                    }
            >
                <h4>
                    <span style={{cursor: "pointer"}}
                        onClick={this.deleteItem.bind(this, this.props.item)}
                    >X</span> - {this.props.item.title}</h4>
                <span style={{ "font-family": "Tahoma" }}>{this.props.item.body}</span>
            </Rnd>;

        return html;
    }
}

export default Text;