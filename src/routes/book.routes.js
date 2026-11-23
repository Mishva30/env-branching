import { Router } from 'express';
import * as bookService from '../services/book.service.js';

const router = Router();

router.post('/', async (req, res) => {
  res.status(201).json(await bookService.createBook(req.body));
});

router.get('/', async (req, res) => {
  res.json(await bookService.getBooks());
});

router.get('/:id', async (req, res) => {
  const book = await bookService.getBookById(req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

router.put('/:id', async (req, res) => {
  const book = await bookService.updateBook(req.params.id, req.body);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

router.delete('/:id', async (req, res) => {
  const book = await bookService.deleteBook(req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.status(204).send();
});

export default router;
