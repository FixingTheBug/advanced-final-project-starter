import React, { Component } from "react";
import ListOfItemsContainer from "../containers/ListOfItemsContainer";
import PlusIconContainer from "../containers/PlusIconContainer";
import ModifyBarContainer from "../containers/ModifyBarContainer";

class Wrapper extends Component {



  constructor(props) {
      super(props);

      this.selectItem = this.selectItem.bind(this);

      this.state = {
        item: "",
      };
    }

    selectItem(event) {
      document.getElementById("modify-bar").style.display = 'block';
      let id = this.props.items.findIndex(x => x._id === event.target.parentNode.parentNode.id);
        this.setState({
            item: this.props.items[id]
        });
    }

    render() {
      return (
          <div>
              <ListOfItemsContainer selectItem={this.selectItem} items={this.props.items} />
              <PlusIconContainer />
              <ModifyBarContainer item={this.state.item} />
          </div>
      )
    }
}

export default Wrapper;
