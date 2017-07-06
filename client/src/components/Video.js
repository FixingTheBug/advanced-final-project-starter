import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Rnd from "react-rnd";
import {findHighestZIndex, getYouTubeID} from "../helpers";
import FontAwesome from "react-fontawesome";

class Video extends Component {
    constructor() {
        super();
    }

    handleDragStop(event, item) {
        let div = document.getElementById(item._id).getBoundingClientRect();
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
                extendsProps={
                    {
                        id: this.props.item._id,
                        className: "item-container",
                        onClick: () => {
                            this.handleClick(event, this.props.item)
                        },
                    }
                }
                id={this.props.item._id}
                key={this.props.item._id}
                default={{
                    x: this.props.item.x,
                    y: this.props.item.y,
                    width: this.props.item.width,
                    height: this.props.item.height,
                }}
                z={this.props.item.zIndex}
                style={{position:"absolute"}}
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
                    <div className="box-heading" style={{background: this.props.item.colour}}>
                        <div className="card-text">
                            <p>
                                <span style={{cursor: "pointer", float: "left"}}
                                    onClick={this.deleteItem.bind(this, this.props.item)}
                                >
                                    <FontAwesome name='window-close' />
                                </span> -
                                <span style={{float: "left", marginLeft: "5px"}}>{this.props.item.title}</span>
                                <span style={{float: "right"}}>
                                    <FontAwesome name='eyedropper'
                                        style={{cursor: "pointer"}}
                                        onClick={this.changeColour.bind(this, this.props.item)}
                                    />
                                    <FontAwesome name='pencil-square-o' />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div
                        style={{ textAlign: "right", display: "none" }}
                        id={this.props.item._id + "-colour"}
                    >
                        <FontAwesome
                            className="colour-changer"
                            name="circle"
                            style={{ color: "#1abc9c"}}
                            onClick={
                                (e) => { this.saveColour(e.target.style.color, this.props.item) }
                            }
                        />
                        <FontAwesome
                            className="colour-changer"
                            name="circle"
                            style={{ color: "#3498db"}}
                            onClick={
                                (e) => { this.saveColour(e.target.style.color, this.props.item) }
                            }
                        />
                        <FontAwesome
                            className="colour-changer"
                            name="circle"
                            style={{ color: "#34495e"}}
                            onClick={
                                (e) => { this.saveColour(e.target.style.color, this.props.item) }
                            }
                        />
                        <FontAwesome
                            className="colour-changer"
                            name="circle"
                            style={{ color: "#f1c40f"}}
                            onClick={
                                (e) => { this.saveColour(e.target.style.color, this.props.item) }
                            }
                        />
                        <FontAwesome
                            className="colour-changer"
                            name="circle"
                            style={{ color: "#e74c3c"}}
                            onClick={
                                (e) => { this.saveColour(e.target.style.color, this.props.item) }
                            }
                        />
                        <FontAwesome
                            className="colour-changer"
                            name="circle"
                            style={{ color: "#95a5a6"}}
                            onClick={
                                (e) => { this.saveColour(e.target.style.color, this.props.item) }
                            }
                        />
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" width="100%" height="auto"
                            src={"https://www.youtube.com/embed/" + getYouTubeID(this.props.item.body)}  frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </Rnd>;
        
        return html;
    }
}

export default Video;







