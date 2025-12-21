import { Book } from '../domain/model/book.model';
import { IBookRepository } from '../domain/repository/book.repository';

export class GetAllBooksUseCase {
  constructor(private bookRepository: IBookRepository) {}

  execute(): Book[] {
    return this.bookRepository.findAll();
  }
}