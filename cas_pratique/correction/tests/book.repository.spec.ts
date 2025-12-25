// TODO: Écrire les tests pour le repository
import { Book } from "../domain/model/book.model";
import { InMemoryBookRepository } from "../infrastructure/in-memory-book.repository"

describe("InMemoryBookRepository", () => {
    let repository: InMemoryBookRepository;

    beforeEach(() => {
        repository = new InMemoryBookRepository();
    })

    test("should save and find a book", () => {
        const book: Book = { id: "1", title: "Clean code" };

        repository.save(book);

        const found = repository.findById('1');

        expect(found).toEqual(book);
    })

    test("should return null when book is not found", () => {
        const found = repository.findById("99");
        expect(found).toBeNull();
    })

    test("should handle multiple books", () => {
        const book1: Book = { id: "1", title: "Clean code" };
        const book2: Book = { id: "2", title: "The Pragmatic Programmer" };

        repository.save(book1);
        repository.save(book2);

        expect(repository.findById("1")).toEqual(book1);
        expect(repository.findById("2")).toEqual(book2);
    });

    test("should return all books", () => {
        const book1: Book = { id: "1", title: "Clean code" };
        const book2: Book = { id: "2", title: "The Pragmatic Programmer" };

        repository.save(book1);
        repository.save(book2);

        const books = repository.findAll();
        expect(books).toEqual([book1, book2]);
    });

    test("should delete a book", () => {
        const book: Book = { id: "1", title: "Clean code" };

        repository.save(book);
        repository.delete("1");

        expect(repository.findById("1")).toBeNull();
    });
})