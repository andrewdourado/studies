module.exports = (app) => {
    app.use('/', require('./routes/main/index'));
    app.use('/car', require('./routes/cars/index'));
}