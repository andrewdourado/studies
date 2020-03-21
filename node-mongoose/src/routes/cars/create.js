const Car = require('../../schemas/Car');

module.exports = (req, res) => {
    Car
        .create(req.body)
        .then(created => res.json(created));
}