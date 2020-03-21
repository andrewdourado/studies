const mongoose = require('mongoose');
const createdPlugin = require('./plugins/created');

const Person = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String
    },
    age: {
        // permite qlqr tipo
        type: mongoose.SchemaTypes.Mixed
    }
}, { strict: false }); // permite add novos campos

// campo virtual
Person.virtual('fullname').get(function () {
    return this.name.firstName + ' ' + this.name.lastName;
});

Person.virtual('fullname').set(function (name) {
    this.name.firstName = name.firstName;
    this.name.lastName = name.lastName;
});

// static method - relacionado c/ o schema
Person.statics.findByName = function (firstName, lastName, callback) {
    const PersonInst = mongoose.model('Person', Person);
    return PersonInst.findOne({ 'name.firstName': firstName, 'name.lastName': lastName }, callback);
};

//instance method - relacionado c/ o document
Person.methods.ageGreaterThan20 = function (age, cb) {
    if (age > 20)
        cb(null, true);
    else
        cb(null, false);
}

Person.plugin(createdPlugin, {});
module.exports = mongoose.model('Person', Person);