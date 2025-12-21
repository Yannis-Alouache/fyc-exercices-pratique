import { Book } from '../domain/model/book.model';
import { IBookRepository } from '../domain/repository/book.repository';

export class InMemoryBookRepository implements IBookRepository {
  private books: Book[] = [];

  save(book: Book): void {
    this.books.push(book);
  }

  findById(id: string): Book | null {
    return this.books.find(book => book.id === id) || null;
  }
}