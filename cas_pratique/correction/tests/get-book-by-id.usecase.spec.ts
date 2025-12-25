import { GetBookByIdUseCase } from '../application/get-book-by-id.usecase';
import { InMemoryBookRepository } from '../infrastructure/in-memory-book.repository';
import { BookNotFoundException } from '../domain/exceptions/book.exception';
import { Book } from '../domain/model/book.model';

describe('GetBookByIdUseCase', () => {
  let useCase: GetBookByIdUseCase;
  let repository: InMemoryBookRepository;

  beforeEach(() => {
    repository = new InMemoryBookRepository();
    useCase = new GetBookByIdUseCase(repository);
  });

  it('should return a book if found', () => {
    const book: Book = { id: '1', title: 'Clean Code', author: 'Robert C. Martin' };
    repository.save(book);

    const result = useCase.execute('1');

    expect(result).toEqual(book);
  });

  it('should throw BookNotFoundException if book not found', () => {
    expect(() => useCase.execute('99')).toThrow(BookNotFoundException);
  });

  it('should return the correct book when multiple books exist', () => {
    const book1: Book = { id: '1', title: 'Clean Code', author: 'Robert C. Martin' };
    const book2: Book = { id: '2', title: 'The Pragmatic Programmer', author: 'Andrew Hunt' };

    repository.save(book1);
    repository.save(book2);

    const result = useCase.execute('2');

    expect(result).toEqual(book2);
  });
});