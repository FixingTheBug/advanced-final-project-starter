import React, { Component } from "react";
import Rnd from "react-rnd";
import {findHighestZIndex} from "../helpers";

class Image extends Component {
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
                style={{position: "absolute"}}
                z={this.props.item.zIndex}
                onDragStop=
                    {
                        () => { this.handleDragStop(event, this.props.item) }
                    }
                onResizeStop=
                    {
                        () => { this.handleResizeStop(event, this.props.item) }
                    }
            >
                <div className="box">
                    <p className="box-heading">
                        <span style={{cursor: "pointer"}}
                            onClick={this.deleteItem.bind(this, this.props.item)}
                        >X</span> - <span>{this.props.item.title}</span>
                    </p>
                    <img draggable="false" className="img-responsive" src={this.props.item.body} />
                    
                </div>
            </Rnd>;

        return html;
    }
}

export default Image;