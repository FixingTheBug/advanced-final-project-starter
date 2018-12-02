import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Rnd} from "react-rnd";
import {findHighestZIndex, getYouTubeID} from "../helpers";
import FontAwesome from "react-fontawesome";

class Video extends Component {
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
      item.width = event.srcElement.offsetWidth;
      item.height = event.srcElement.offsetHeight;
      var div = document.getElementById(item._id).getBoundingClientRect();
      var iframe = document.getElementById(item._id + "_video");
      iframe.style.width = event.srcElement.offsetWidth;
      iframe.style.height = event.srcElement.offsetHeight;
      item.x = div.left;
      item.y = div.top;

      this.props.updateItem(item);
    }

    handleClick(event, item) {
      let h = findHighestZIndex('item-container');
      console.log(h);
      this.props.item.zIndex = parseInt(h) + 1;
      this.props.updateItem(item);
      let div = document.getElementById(this.props.item._id);
      div.style.zIndex = parseInt(h) + 1;
    }

    deleteItem(e, item) {
        this.props.deleteItem(e);
    }

    changeColour(event, item) {
        // event.target.append(<SketchPicker />);
        document.getElementById(event._id + "-colour").style.display = "block";
    }

    saveColour(colour, item) {
        item.colour = colour;

        this.props.updateItem(item);
        document.getElementById(item._id + "-colour").style.display = "none";

    }

    render() {
        const html =
            <Rnd

                id={this.props.item._id}
                key={this.props.item._id}
                default={{
                  x: this.props.item.x,
                  y: this.props.item.y,
                  z: this.props.item.zIndex
                }}
                width={this.props.item.width}
                height={this.props.item.height}
                minWidth={100}
                minHeight={50}
                className="box elem"
                //lockAspectRatio={true}

                onDragStop=
                    {
                        () => { this.handleDragStop(event, this.props.item) }
                    }
                onResizeStop=
                    {
                        () => { this.handleResizeStop(event, this.props.item) }
                    }
                >





                <div className="box-title" onClick= {
                    this.handleClick.bind(this)
                }>
                  <FontAwesome
                    name="times"
                    style={{ position: "absolute", left: "1", top: "5", background: "#aa0000", padding: "0 10px" }}
                    onClick={this.deleteItem.bind(this, this.props.item)}
                  />

                  <span style={{ padding: "0 30px" }}>{this.props.item.title}</span>

                  <FontAwesome
                      name="arrows-v"
                      style={{ position: "absolute", right: "0", top: "5", background: "#aa0000", padding: "0 10px" }}
                  />

                </div>
                <div className="box-content" onClick= {
                    this.handleClick.bind(this)
                } style={{width: this.props.item.width + "px", height: this.props.item.height + "px"}}>


                <iframe id={this.props.item._id + "_video"} width={this.props.item.width} height={this.props.item.height}
                src={"https://www.youtube.com/embed/" + getYouTubeID(this.props.item.body)} frameborder="0" allowfullscreen></iframe>
                </div>

            </Rnd>;

        return html;
    }
}

export default Video;
