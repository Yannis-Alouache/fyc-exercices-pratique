import { Book } from '../domain/model/book.model';
import { IBookRepository } from '../domain/repository/book.repository';
import { BookNotFoundException } from '../domain/exceptions/book.exception';

export class GetBookByIdUseCase {
  constructor(private bookRepository: IBookRepository) {}

  execute(id: string): Book {
    const book = this.bookRepository.findById(id);
    if (!book) {
      throw new BookNotFoundException(id);
    }
    return book;
  }
}