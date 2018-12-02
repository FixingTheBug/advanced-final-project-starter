import React, { Component } from "react";
import {Rnd} from "react-rnd";
import {findHighestZIndex} from "../helpers";
import FontAwesome from "react-fontawesome";


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
        console.log(event);
        var div = document.getElementById(item._id).getBoundingClientRect();
        console.log(div);
        item.width = div.width;
        item.height = div.height;
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

    getWidth(item) {
      if(!item.width) {
        let img = document.createElement('img');
        img.src = item;
        return item.naturalWidth;
      } else {
        return item.width;
      }
    }

    getHeight(item) {
      if(!item.height) {

          let img = document.createElement('img');
          img.src = item.body;
          return item.naturalHeight;
        } else {
          return item.height;
        }
    }

    render() {
        const html =
            <Rnd
                id={this.props.item._id}
                default={{
                  x: this.props.item.x,
                  y: this.props.item.y,
                  width: this.getWidth(this.props.item),
                  height: this.getHeight(this.props.item),
                  z: this.props.item.zIndex
                }}
                minWidth={100}
                minHeight={50}
                className="box elem"
                lockAspectRatio={true}
                onDragStop=
                    {
                        () => { this.handleDragStop(event, this.props.item) }
                    }

                    onResizeStop=
                        {
                            () => { this.handleResizeStop(event, this.props.item) }
                        }
            >

              <div className="box-content" onClick= {
                  this.handleClick.bind(this)
              }>
                <img className="box-img nonDraggableImage" src={this.props.item.body} onClick= {
                    this.handleClick.bind(this)
                }/>
              </div>
            </Rnd>;

        return html;
    }
}

export default Image;
