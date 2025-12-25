import { DomainException } from '../domain/exceptions/domain.exception';
import { BookNotFoundException } from '../domain/exceptions/book.exception';

describe('Exceptions', () => {
  it('should create a DomainException', () => {
    const exception = new DomainException('Test domain exception');
    expect(exception).toBeInstanceOf(Error);
    expect(exception).toBeInstanceOf(DomainException);
    expect(exception.name).toBe('DomainException');
    expect(exception.message).toBe('Test domain exception');
  });

  it('should create a BookNotFoundException', () => {
    const exception = new BookNotFoundException('1');
    expect(exception).toBeInstanceOf(Error);
    expect(exception).toBeInstanceOf(DomainException);
    expect(exception).toBeInstanceOf(BookNotFoundException);
    expect(exception.name).toBe('BookNotFoundException');
    expect(exception.message).toBe('Book with id 1 not found');
  });

  it('should create a BookNotFoundException with different IDs', () => {
    const exception1 = new BookNotFoundException('abc-123');
    const exception2 = new BookNotFoundException('xyz-789');

    expect(exception1.message).toBe('Book with id abc-123 not found');
    expect(exception2.message).toBe('Book with id xyz-789 not found');
  });
});