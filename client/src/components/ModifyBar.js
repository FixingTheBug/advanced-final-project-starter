import React, { Component } from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {getWindowCenter} from '../helpers';


class ModifyBar extends Component {
  constructor(props) {
      super(props);

      console.log(this.props);

      this.state = {

      }
      this.update = this.update.bind(this);


    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        console.log(prevState);
        let item = nextProps.item;
        console.log(item);
        return null;
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     this.setState({test: nextProps});
    //     console.log(this.state);
    //   // this.setState({item: nextProps.item});
    //   // console.log(this.state);
    //   // if(getWindowCenter() >= this.state.item.x) {
    //   //     this.position = 'right';
    //   // } else { this.position = 'left'; }
    //   // console.log(this.position);
    //   // console.log(getWindowCenter());
    //   // console.log(this.state.item.x);
    // }

    update(event) {
        console.log(this.data);
        this.state.item.colour = event.target.style.background;
        this.state.item.body = this.data;
        this.props.updateItem(this.state.item);
    }


    render() {
      return (
          <div
              className={"modify-bar " + this.position}
              id="modify-bar"
          >
                <section className="modify-bar-colour">
                      <i onClick={this.update} style={{background: "#1abc9c"}}></i>
                      <i onClick={this.update} style={{background: "#2ecc71"}}></i>
                      <i onClick={this.update} style={{background: "#f1c40f"}}></i>
                      <i onClick={this.update} style={{background: "#d35400"}}></i>
                      <i onClick={this.update} style={{background: "#e74c3c"}}></i>
                      <i onClick={this.update} style={{background: "#bdc3c7"}}></i>
                </section>

                <section>
                <CKEditor
                    editor={ ClassicEditor }
                    //data={this.state.item.body}
                    config={{
                        toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo', ]
                    }}
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        this.data = editor.getData();
                    } }
                    onBlur={ editor => {
                        this.state.item.body = this.data;
                        this.update(event);
                    } }
                    onFocus={ editor => {
                        console.log( 'Focus.', editor );
                    } }
            />
                </section>



              <div className="modify-bar-close" onClick={(e) => {e.target.parentNode.style.display = 'none'}}>X</div>
        </div>);
    }
}

export default ModifyBar;
