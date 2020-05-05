const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const bookSchema = new mongoose.Schema(
  {
    isbn: {
      type: String,
      required: [true, ' A book must have a isbn'],
      unique: true,
      validate: [validator.isISBN, 'Provide a valid ISBN'],
    },
    title: {
      type: String,
    },
    slug: String,
    author: {
      type: String,
    },
    year: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

bookSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'book',
  localField: '_id',
});

bookSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
