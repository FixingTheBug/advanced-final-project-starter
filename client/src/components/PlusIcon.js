import React, { Component } from "react";

class PlusIcon extends Component {
    constructor() {
        super();
        this.state = {
            icon: '+',
            list: 0,
            form: 0,
            type: '',
            body: '',
            title: '',
            width: 300,
            height: 200,
            x: 100,
            y: 100,
            zIndex: 100
        }
    }

    showList(e) {
        this.state.list === 0 ? this.setState({list: 1}) : this.setState({list: 0});
        this.state.icon === '+' ? this.setState({icon: '-'}) : this.setState({icon: '+'});

    }

    showForm(e) {
        this.state.form === 0 ? this.setState({form: 1}) : this.setState({form: 0});
        this.setState({type: e.target.rel});
    }

    render() {
      return null;
    //     let listDiv = '';
    //     let formDiv = '';
    //
    //     if(this.state.list === 1) {
    //         listDiv =
    //             <div className="list-container">
    //                 <div><a href="#" rel="image" onClick={this.showForm.bind(this)}>Image</a></div>
    //                 <div><a href="#" rel="video" onClick={this.showForm.bind(this)}>Video</a></div>
    //                 <div><a href="#" rel="text" onClick={this.showForm.bind(this)}>Text</a></div>
    //                 <div><a href="#" rel="map" onClick={this.showForm.bind(this)}>Map</a></div>
    //             </div>;
    //     } else {
    //         listDiv = '';
    //     }
    //
    //     if(this.state.form === 1) {
    //         formDiv =
    //             <div className="form-container">
    //                 <form
    //                     onSubmit={
    //                         (e) => {
    //                             e.preventDefault();
    //                             this.setState({
    //                                 icon: '+',
    //                                 list: 0,
    //                                 form: 0,
    //                                 type: '',
    //                             });
    //                             if(this.props.saveItem) {
    //                                 this.props.saveItem(this.state);
    //                             }
    //                         }
    //                     }
    //                 >
    //                     <label>Title:</label>
    //                     <input
    //                         type="text"
    //                         name="title"
    //                         onChange={
    //                             (e) => {
    //                                 this.setState({
    //                                     title: e.target.value
    //                                 });
    //                             }
    //                         }
    //                     />
    //
    //                     <label>Body:</label>
    //                     <input
    //                         type="text"
    //                         name="body"
    //                         onChange={
    //                             (e) => {
    //                                 this.setState({
    //                                     body: e.target.value
    //                                 });
    //                             }
    //                         }
    //                     />
    //                     <input
    //                         type="hidden"
    //                         value={this.state.type}
    //                     />
    //                     <input type="submit" value="Submit" />
    //                 </form>
    //             </div>;
    //     } else {
    //         formDiv = '';
    //     }
    //
    //     return (
    //         <div>
    //             <div className="plus-icon">
    //                 <a href="#" onClick={this.showList.bind(this)}>
    //                     {this.state.icon}
    //                 </a>
    //             </div>
    //             <div>
    //                 {listDiv}
    //             </div>
    //             <div>
    //                 {formDiv}
    //             </div>
    //         </div>
    //     );
    }
}

export default PlusIcon;
