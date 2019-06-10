import React, { Component } from "react";
import {findHighestZIndex} from "../helpers";
import {Rnd} from "react-rnd";

class Text extends Component {
    constructor(props) {
        super();
        console.log(props);
    }

    render() {
        const html =
        <Rnd
              default={{
                x: this.props.item.x,
                y: this.props.item.y,
                width: this.props.item.width,
                height: this.props.item.height,
              }}
              onDragStop={ (e, d) => { this.props.drop(d.x, d.y, this.props.item) } }
              onResizeStop={(e, direction, ref, delta, position) => {
                  this.props.resize(delta.width, delta.height, this.props.item);
                  this.props.drop(position.x, position.y, this.props.item)
              }
            }
              className="box"
              id={this.props.item._id}
        >
            <div className="box-title" style={{ background: this.props.item.colour }}>
                { this.props.item.title }
            </div>

              <div className="box-body">
                <div className="box-text" dangerouslySetInnerHTML={{__html: this.props.item.body}} />
                <div className="box-edit" onClick={this.props.selectItem}>Edit</div>
                </div>

        </Rnd>


        return html;
    }

}

export default Text;
