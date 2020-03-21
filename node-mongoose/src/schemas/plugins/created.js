// add um novo um novo campo ao schema 
// e executa uma ação antes de criado um novo document.
module.exports = function (schema, options) {
    schema.add({ created: Date });

    schema.pre('save', function (next) {
        this.created = new Date();
        next();
    })
}