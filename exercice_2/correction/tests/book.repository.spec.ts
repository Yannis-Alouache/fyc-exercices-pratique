import { InMemoryBookRepository } from '../infrastructure/in-memory-book.repository';
import { Book } from '../domain/model/book.model';

describe('InMemoryBookRepository', () => {
  let repository: InMemoryBookRepository;

  beforeEach(() => {
    repository = new InMemoryBookRepository();
  });

  it('should save and find a book', () => {
    const book: Book = { id: '1', title: 'Clean Code' };
    repository.save(book);
    const found = repository.findById('1');
    expect(found).toEqual(book);
  });

  it('should return null when book is not found', () => {
    const found = repository.findById('99');
    expect(found).toBeNull();
  });

  it('should handle multiple books', () => {
    const book1: Book = { id: '1', title: 'Clean Code' };
    const book2: Book = { id: '2', title: 'The Pragmatic Programmer' };

    repository.save(book1);
    repository.save(book2);

    expect(repository.findById('1')).toEqual(book1);
    expect(repository.findById('2')).toEqual(book2);
  });
});