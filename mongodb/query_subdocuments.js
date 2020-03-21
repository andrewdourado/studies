db.getCollection('products').find({
        'dim.height': 6,
        'dim.width': 9
})