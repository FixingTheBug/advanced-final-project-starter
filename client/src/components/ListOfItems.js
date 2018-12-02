import React, { Component } from "react";
import Video from "./Video";
import Image from "./Image";
import Text from "./Text";
import Map from "./Map";

class ListOfItems extends Component {
  constructor() {
    super();

    this.initialPositionX = 0;
    this.initialPositionY = 0;
    this.finalPositionX = 0;
    this.finalPositionY = 0;
    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);
    this.resize = this.resize.bind(this);
  }

  drag(event) {
    this.initialPositionX = event.nativeEvent.clientX;
    this.initialPositionY = event.nativeEvent.clientY;
  }

  drop(event) {
    this.finalPositionY = event.nativeEvent.clientY;
    this.finalPositionX = event.nativeEvent.clientX;
    event.target.style.top = parseInt(event.target.style.top, 10) + this.finalPositionY - this.initialPositionY + "px";
    event.target.style.left = parseInt(event.target.style.left, 10) + this.finalPositionX - this.initialPositionX + "px";
    let id = this.props.items.findIndex(x => x._id === event.target.id);
    this.props.items[id].x = parseInt(event.target.style.left, 10);
    this.props.items[id].y = parseInt(event.target.style.top, 10);
    this.props.updateItem(this.props.items[id]);
  }

  resize(event) {
    let width = event.target.style.width, height = event.target.style.height;
    let id = this.props.items.findIndex(x => x._id === event.target.id);
    this.props.items[id].width = parseInt(width, 10);
    this.props.items[id].height = parseInt(height, 10);
    this.props.updateItem(this.props.items[id]);
  }

  render() {
    const ItemDivs = this.props.items.map((item) => {
        switch(item.type) {
          case 'video':
            // return <Video item={item} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />;
            break;
          case 'image':
            // return <Image item={item} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />;
            break;
          case 'map':
            // return <Map item={item} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />;
            break;
          case 'text':
              return <Text
                          item={item}
                          drag={this.drag}
                          drop={this.drop}
                          resize={this.resize}
                          updateItem={this.props.updateItem}
                          deleteItem={this.props.deleteItem}
                          key={item._id}
                      />;
              break;
        }
    });

    return (
      <div>
        {ItemDivs}
      </div>
    );
  }
}

export default ListOfItems;
