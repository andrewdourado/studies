db.getCollection('users').updateOne({
    name: 'André Felipe',
    age: 25
}, {
    $set: {
        age: 26
    }
})