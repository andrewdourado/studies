const Person = require('../../schemas/Person');

module.exports = (req, res) => {
    Person
        .findByName('André', 'Dourado',
            (err, person) => res.json(person));
}