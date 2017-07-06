import mongoose from "mongoose";

const schema = new mongoose.Schema({
    type: {
        required: true,
        type: "String"
    },
    body: {
        required: true,
        type: "String"
    },
    title: {
        required: true,
        type: "String"
    },
    x: {
        required: false,
        type: "Number"
    },
    y: {
        required: false,
        type: "Number"
    },
    width: {
        required: false,
        type: "String"
    },
    height: {
        required: false,
        type: "String"
    },
    zIndex: {
        required: false,
        type: "Number"
    },
    colour: {
        required: false,
        type: "String"
    }
});

const ItemModel = mongoose.model("Item", schema);
export default ItemModel;