import ItemModel from "../models/ItemModel";

export function list(req, res) {
    ItemModel.find({}).exec()
    .then((items) => {
        return res.json(items);
    });
}

export function update(req, res) {
    ItemModel.findById({_id: req.params.id}).exec()
    .then((item) => {
        item.type = req.body.type || item.type;
        item.body = req.body.body || item.body;
        item.x = req.body.x;
        item.y = req.body.y;
        item.width = req.body.width || item.width;                
        item.height = req.body.height || item.height;
        item.zIndex = req.body.zIndex || item.zIndex;
        item.colour = req.body.colour || item.colour;              
        return item.save();
    })
    .then((item) => {
        return res.json(item);
    } );
}

export function create(req, res) {
    const item = new ItemModel({
        "type": req.body.type,
        "body": req.body.body,
        "title": req.body.title,
        "x": 100,
        "y": 100,
        "width": 300,
        "height": "auto",
        "zIndex": 100,
        "colour": "#aa0000"
    });
    console.log(item);
    item.save()
    .then((item) => {
        return res.json(item);
    });
}

export function remove(req, res) {
    ItemModel.remove({_id: req.params.id})
    .then(items => {
        return res.send('You have deleted an item');
    });
}