import React, { Component } from "react";
import Rnd from "react-rnd";
import Video from "./Video";
import Image from "./Image";
import Text from "./Text";
import Map from "./Map";

class ListOfItems extends Component {
  constructor() {
    super();
    console.log(this);
  }

  componentDidMount() {

  }

  render() {
    const ItemDivs = this.props.items.map((item) => {
        switch(item.type) {
          case 'video':
            return <Video item={item} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />;
            break;
          case 'image':
            return <Image item={item} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />;
            break;
          case 'map':
            return <Map item={item} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />;
            break;
          case 'text':
            return <Text item={item} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />;
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

// function ListOfItems(props) {
//     const ItemDivs = props.items.map((item) => {
//         console.log(item._id);
//         return (
//             <p>test</p>
//         );
//     });

//     return (
//         <div>
//             <h1>List of items</h1>
//             <div>{ItemDivs}</div>
//         </div>
//     );
// }


        // console.log(props.items);
        // const ItemDivs = this.props.items.map((item) => {
        //     let type = item.type;
        //     return {type};
        // });
        // return <div>{ItemDivs}</div>;
        // const ItemDivs = this.props.items.map((item) => {
        //     console.log('test');
        //     let type = item.type;
        //     let html = '';
        //     return <p>{item}</p>;
            // switch(type) {
            //     case "video":
            //         <Video />
            //         break;
            // }
            //     case "image":
            //         html =
            //             <Rnd
            //                 default={{
            //                     x: 100,
            //                     y: 100,
            //                     width: 320,
            //                     height: "auto",
            //                 }}
            //                 style={{position: "absolute"}}>
            //                 <div className="box">
            //                     <p className="box-heading"><span>Image name</span></p>
            //                     <img draggable="false" className="img-responsive" src="http://keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg" />
                                
            //                 </div>
            //             </Rnd>
            //         break;
            //     case "map":
            //         html =
            //             <Rnd
            //                 default={{
            //                     x: 150,
            //                     y: 205,
            //                     width: 200,
            //                     height: 190,
            //                 }}
            //                 minWidth={50}
            //                 minHeight={20}
            //                 style={{position: "absolute", padding: "1px"}}
            //                 >
            //                 <div className="box">
            //                     <p className="box-heading">
            //                     <span>test2</span>
            //                     </p>
            //                     <iframe
            //                         style={{border: 0}}
            //                         width="100%"
            //                         height="100%"
            //                         frameborder="0"
            //                         border="0"
            //                         src="https:www.google.com/maps/embed/v1/place?key=AIzaSyBxoo1nB4cDQezeh0lpYsXrU3T_wenhWmY&q=Space+Needle,Seattle+WA" allowfullscreen>
            //                     </iframe>
            //                 </div>
            //             </Rnd>
            //         break;
            //     case "text":
            //         html =
            //             <Rnd
            //             default={{
            //                 x: item.x,
            //                 y: item.y,
            //                 width: item.width,
            //                 height: item.height,
            //             }}
            //             minWidth={50}
            //             minHeight={20}
            //             style={{position: "absolute", background: "#fff", padding: "2px", border: "1px solid #000000"}}>
            //             <span>{item.body}</span>
            //         </Rnd>
            //         break;
            // }
            // return html;
        // });

        // return (
        //     <div>
        //         <h1>List of items</h1>
        //         {ItemDivs}
        //     </div>
        // );