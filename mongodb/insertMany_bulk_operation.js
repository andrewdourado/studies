db.getCollection('users').insertMany([{
    name: 'Teste Bulk 1',
    email: 'bulk@gmail.com',
    age: 10
}, {
    name: 'Teste Bulk 2',
    email: 'bulk@gmail.com',
    age: 12
}, {
    name: 'Teste Bulk 3',
    email: 'bulk@gmail.com',
    age: 13
}])