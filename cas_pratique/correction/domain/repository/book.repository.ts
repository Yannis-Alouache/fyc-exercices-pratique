import { Book } from '../model/book.model';

export interface IBookRepository {
  save(book: Book): void;
  findById(id: string): Book | null;
  findAll(): Book[];
  delete(id: string): boolean;
}