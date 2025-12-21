import { IBookRepository } from '../domain/repository/book.repository';
import { BookNotFoundException } from '../domain/exceptions/book.exception';

export class DeleteBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  execute(id: string): void {
    const book = this.bookRepository.findById(id);
    if (!book) {
      throw new BookNotFoundException(id);
    }
    this.bookRepository.delete(id);
  }
}