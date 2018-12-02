import React, { Component } from "react";
import {findHighestZIndex} from "../helpers";
import FontAwesome from "react-fontawesome";

class Text extends Component {
    constructor() {
        super();
    }

    render() {
        const html =
        <div
            draggable="true"
            id={this.props.item._id }
            onDragStart={this.props.drag}
            onClick={this.click}
            onDragEnd={this.props.drop}
            onMouseUp={this.props.resize}
            style={{
                top: this.props.item.y,
                left: this.props.item.x,
                width: this.props.item.width + "px",
                height: this.props.item.height + "px",
                resize: "both"
            }}
            className = "box"
        >
            {this.props.item.body}
        </div>;

        return html;
    }
}

export default Text;
