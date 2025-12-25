import { CreateBookUseCase } from '../application/create-book.usecase';
import { InMemoryBookRepository } from '../infrastructure/in-memory-book.repository';
import { BookAlreadyExistsException } from '../domain/exceptions/book.exception';
import { Book } from '../domain/model/book.model';

describe('CreateBookUseCase', () => {
  let useCase: CreateBookUseCase;
  let repository: InMemoryBookRepository;

  beforeEach(() => {
    repository = new InMemoryBookRepository();
    useCase = new CreateBookUseCase(repository);
  });

  it('should save a new book when it does not exist', () => {
    const book: Book = { id: '1', title: 'Clean Code', author: 'Robert C. Martin' };

    useCase.execute(book);

    const foundBook = repository.findById('1');
    expect(foundBook).toEqual(book);
  });

  it('should throw BookAlreadyExistsException when book already exists', () => {
    const existingBook: Book = { id: '1', title: 'Clean Code', author: 'Robert C. Martin' };
    const newBook: Book = { id: '1', title: 'Clean Code 2', author: 'Someone Else' };

    // First add the existing book
    repository.save(existingBook);

    expect(() => useCase.execute(newBook)).toThrow(BookAlreadyExistsException);

    // Verify the original book is still there
    const foundBook = repository.findById('1');
    expect(foundBook).toEqual(existingBook);
  });

  it('should allow creating multiple books with different IDs', () => {
    const book1: Book = { id: '1', title: 'Clean Code', author: 'Robert C. Martin' };
    const book2: Book = { id: '2', title: 'The Pragmatic Programmer', author: 'Andrew Hunt' };

    useCase.execute(book1);
    useCase.execute(book2);

    expect(repository.findById('1')).toEqual(book1);
    expect(repository.findById('2')).toEqual(book2);
  });
});