const Person = require('../../schemas/Person');

module.exports = (req, res) => {
    let data = {
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        age: req.body.age,
        city: req.body.city
    };

    const person = new Person(data);

    person
        .save()
        .then((created) => res.json(created));

    // Person
    //     .create(data)
    //     .then((created) => res.json(created));
}