import Book from '../models/book.model.js';

export const createBook = (data) => Book.create(data);
export const getBooks = () => Book.find();
export const getBookById = (id) => Book.findById(id);
export const updateBook = (id, data) =>
  Book.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteBook = (id) => Book.findByIdAndDelete(id);
