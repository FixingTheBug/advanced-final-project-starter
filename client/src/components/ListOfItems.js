import React, { Component } from "react";
import Video from "./Video";
import Image from "./Image";
import Text from "./Text";
import Map from "./Map";

class ListOfItems extends Component {
  constructor(props) {
    super(props);
    this.drop = this.drop.bind(this);
    this.resize = this.resize.bind(this);

    console.log(props);
  }


  drop(x, y, item) {
      let id = this.props.items.findIndex(a => a._id === item._id);
      this.props.items[id].x = x;
      this.props.items[id].y = y;
      this.props.updateItem(this.props.items[id]);
  }

  resize(x, y, item) {
      let id = this.props.items.findIndex(a => a._id === item._id);
      this.props.items[id].width = this.props.items[id].width + x;
      this.props.items[id].height = this.props.items[id].height + y;
      this.props.updateItem(this.props.items[id]);
  }

  render() {
    const ItemDivs = this.props.items.map((item) => {
        console.log(item.type);
        switch (item.type) {
            case 'text':
                return <Text
                            item={item}
                            updateItem={this.props.updateItem}
                            deleteItem={this.props.deleteItem}
                            selectItem={this.props.selectItem}
                            drop={this.drop}
                            resize={this.resize}
                            key={item._id}
                        />;
                break;
            case 'image':
                return <Image
                    item={item}
                    updateItem={this.props.updateItem}
                    deleteItem={this.props.deleteItem}
                    selectItem={this.props.selectItem}
                    drop={this.drop}
                    resize={this.resize}
                    key={item._id}
                />;
                break;

        }
        return <div>{item.type}</div>;
    });

    return (
      <div>
        {ItemDivs}
      </div>
    );
  }
}

export default ListOfItems;
