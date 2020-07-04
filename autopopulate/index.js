const mongoose = require('mongoose');

( async() => {

    mongoose.connect('mongodb://localhost:27017/populate', { useNewUrlParser: true, useUnifiedTopology: true });

    const authorSchema = mongoose.Schema({
        name: String
    });

    const bookSchema = mongoose.Schema({
        title: String,
        author: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Author',
            autopopulate: true
        }
    });

    bookSchema.plugin(require('mongoose-autopopulate'));
    
    const Author = mongoose.model('Author', authorSchema);
    const Book = mongoose.model('Book', bookSchema);
    
    // const newAuthor = new Author({ name: 'André ' });
    // const data = await newAuthor.save();
    // console.log('estrago');
    // const newBook = new Book({ title: 'Book1', author: data._id });
    // const dataBook = await newBook.save();

    const findAll = await Book.find({});
    console.log(JSON.stringify(findAll));

})();