db.getCollection('users').updateMany({
    email: 'bulk@gmail.com'
}, {
    $set: {
        email: 'bulkup@gmail.com'
    }
})