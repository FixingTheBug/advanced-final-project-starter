import React, { Component } from "react";
import {findHighestZIndex} from "../helpers";

class Image extends Component {
    constructor() {
        super();
    }

    render() {
        const html =
        <div
            className="box"
            draggable="true"
            id={this.props.item._id }
            onDragStart={this.props.drag}
            onDragEnd={this.props.drop}
            onMouseUp={this.props.resize}
            style={{
                top: this.props.item.y,
                left: this.props.item.x,
                width: this.props.item.width + "px",
                height: this.props.item.height + "px",
                resize: "both"
            }}
        >
            <div className="box-title" style={{ background: this.props.item.colour }}>
                { this.props.item.title }
            </div>
            <div className="box-body">
                <img draggable="false" src={this.props.item.body} alt="" />
                <div className="box-edit" onClick={this.props.selectItem}>Edit</div>
            </div>

        </div>;

        return html;
    }

}

export default Image;
