import { Book } from '../domain/model/book.model';
import { IBookRepository } from '../domain/repository/book.repository';
import { BookAlreadyExistsException } from '../domain/exceptions/book.exception';

export class CreateBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  execute(book: Book): void {
    const existingBook = this.bookRepository.findById(book.id);
    if (existingBook) {
      throw new BookAlreadyExistsException(book.id);
    }
    this.bookRepository.save(book);
  }
}