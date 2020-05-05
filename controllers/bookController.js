const Book = require('../models/bookModel');
const factory = require('./handlerFactory');
// const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');

exports.getAllBooks = factory.getAll(Book);
exports.getBook = factory.getOne(Book, { path: 'reviews' });
exports.createBook = factory.createOne(Book);
exports.updateBook = factory.updateOne(Book);
exports.deleteBook = factory.deleteOne(Book);

// GET ALL HANDLER
// exports.getAllBooks = catchAsync(async (req, res, next) => {
//   const features = new APIFeatures(Book.find(), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();

//   const books = await features.query;

//   // Send response
//   res.status(200).json({
//     status: 'success',
//     result: books.length,
//     data: {
//       books,
//     },
//   });
// });

// GET ONE HANDLER
// exports.getBook = catchAsync(async (req, res, next) => {
//   const book = await Book.findById(req.params.id).populate('reviews');
//   // Book.findOne({ isbn: req.params.isbn });

//   if (!book) {
//     return next(new AppError('No tour found with that ID', 404));
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       book,
//     },
//   });
// });

// CREATE HANDLER
// exports.createBook = catchAsync(async (req, res, next) => {
//   const newBook = await Book.create(req.body);

//   res.status(201).json({
//     status: 'success',
//     data: {
//       book: newBook,
//     },
//   });
// });

// UPDATE HANDLER
// exports.updateBook = catchAsync(async (req, res, next) => {
//   const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   if (!book) {
//     return next(new AppError('No book found with that ID', 404));
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       book,
//     },
//   });
// });

// DELETE HANDLER
// exports.deleteBook = catchAsync(async (req, res, next) => {
//   const book = await Book.findByIdAndDelete(req.params.id);

//   if (!book) {
//     return next(new AppError('No tour found with that ID', 404));
//   }

//   res.status(204).json({
//     status: 'success',
//   });
// });
