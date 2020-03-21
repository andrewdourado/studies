db.getCollection('products').updateOne({
    _id: ObjectId('5e738b512d8ce832a1921591'),
    'dim.height': 2,
    'dim.width': 3
}, {
    $set: {
        'dim.height': 8,
        'dim.width': 16
    }
})