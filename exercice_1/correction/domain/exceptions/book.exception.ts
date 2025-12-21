import { DomainException } from './domain.exception';

export class BookNotFoundException extends DomainException {
  constructor(bookId: string) {
    super(`Book with id ${bookId} not found`);
    this.name = 'BookNotFoundException';
  }
}