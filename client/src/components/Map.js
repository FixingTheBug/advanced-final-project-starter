// import React, { Component } from "react";
// import {findHighestZIndex, GoogleMapsURLToEmbedURL} from "../helpers";
// import FontAwesome from "react-fontawesome";
//
//
// class Map extends Component {
//     constructor() {
//         super();
//     }
//
//     handleDragStop(event, item) {
//       var div = document.getElementById(item._id).getBoundingClientRect();
//       item.x = div.left;
//       item.y = div.top;
//
//       this.props.updateItem(item);
//     }
//
//     handleResizeStop(event, item) {
//       item.width = event.srcElement.offsetWidth;
//       item.height = event.srcElement.offsetHeight;
//       var div = document.getElementById(item._id).getBoundingClientRect();
//       item.x = div.left;
//       item.y = div.top;
//
//       this.props.updateItem(item);
//     }
//
//     handleResize(event, item) {
//       let iframe = document.getElementById(item._id + "_map");
//       var div = document.getElementById(item._id).getBoundingClientRect();
//       iframe.style.height = div.height + "px";
//     }
//
//     handleClick(event, item) {
//       let h = findHighestZIndex('item-container');
//       this.props.item.zIndex = parseInt(h) + 1;
//       this.props.updateItem(item);
//       let div = document.getElementById(this.props.item._id);
//       div.style.zIndex = parseInt(h) + 1;
//     }
//
//     deleteItem(e, item) {
//         this.props.deleteItem(e);
//     }
//
//     render() {
//         const html =
//             <Rnd
//                 id={this.props.item._id}
//                 default={{
//                   x: this.props.item.x,
//                   y: this.props.item.y,
//                   width: this.props.item.width,
//                   height: this.props.item.height,
//                   z: this.props.item.zIndex
//                 }}
//                 minWidth={100}
//                 minHeight={50}
//                 style={{position: "absolute", padding: "1px"}}
//                 className="box elem"
//                 onResize={
//                   () => { this.handleResize(event, this.props.item)}
//                 }
//                 onDragStop=
//                     {
//                         () => { this.handleDragStop(event, this.props.item) }
//                     }
//                 onResizeStop=
//                     {
//                         () => { this.handleResizeStop(event, this.props.item) }
//                     }
//             >
//
//             <div className="box-title" onClick= {
//                 this.handleClick.bind(this)
//             }>
//
//               <FontAwesome
//                 name="times"
//                 style={{ position: "absolute", left: "1", top: "5", background: "#aa0000", padding: "0 10px" }}
//                 onClick={this.deleteItem.bind(this, this.props.item)}
//               />
//               <span style={{ padding: "0 30px" }}>{this.props.item.title}</span>
//
//               <FontAwesome
//                   name="arrows-v"
//                   style={{ position: "absolute", right: "1", top: "5", background: "#aa0000", padding: "0 10px" }}
//               />
//               </div>
//               <div className="box-content" onClick= {
//                   this.handleClick.bind(this)
//               }>
//             <iframe
//                 id={this.props.item._id + "_map"}
//                 style={{border: 0, background: "#ffffff"}}
//                 width={"100%"}
//                 height={this.props.item.height}
//                 frameborder={"0"}
//                 border={"0"}
//                 //src={GoogleMapsURLToEmbedURL(this.props.item.body)} allowfullscreen>
//                 src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d39217.28976879425!2d4.261010399935275!3d52.09646449182098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e3!4m3!3m2!1d52.1023563!2d4.3187698!4m5!1s0x47c5b0948e68e319%3A0xe32e65be770a7441!2sLa+Stella+Marina%2C+Doctor+Lelykade+23%2C+2583+CL+Den+Haag!3m2!1d52.095082899999994!2d4.2657197!5e0!3m2!1sen!2snl!4v1541951710575">
//                   </iframe>
//             </div>
//
//
//             </Rnd>;
//
//         return html;
//     }
//
// }
//
// export default Map;
