const form = document.querySelector("#book-form");
const bookName = document.querySelector('[name="title"]');
const bookAuthor = document.querySelector('[name="author"]');
const bookIsbn = document.querySelector('[name="isbn"]');
const removeBtn = document.querySelectorAll(".remove-btn");
const submit = document.querySelector(".submit-btn");
const listOfBooks = document.querySelector(".list-of-books");

let books = [];

class Book {
  constructor(title, author, isbn, id) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.getId();
    this.renderBook();
    this.resetSettings();
  }

  getId() {
    this.id = Math.floor(Math.random() * 10000);
    return this.id;
  }

  renderBook() {
    let html = `<div class="book" id="${this.getId()}">
    <span class="book-name">${this.title}</span>
    <span class="author-name">${this.author}</span>
    <span class="ibsn-number">${this.isbn}</span>
    <span><button class="remove-btn">X</button></span>
  </div>`;
    listOfBooks.insertAdjacentHTML("beforeend", html);
  }
  resetSettings() {
    bookName.value = "";
    bookAuthor.value = "";
    bookIsbn.value = "";
  }
}

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   let book = new Book(bookName.value, bookAuthor.value, bookIsbn.value);
//   books.push(book.id);
//   console.log(books);
//   return book, books;
// });
// listOfBooks.addEventListener("click", (e) => {
//   if (e.target.className === "remove-btn") {
//     e.target.closest("div").remove();
//   }
// });

class App {
  constructor() {
    listOfBooks.addEventListener("click", this.removeBook);
    submit.addEventListener("click", this.addBook);
  }
  removeBook(e) {
    if (e.target.className === "remove-btn") {
      e.target.closest("div").remove();
    }
  }
  addBook(e) {
    e.preventDefault();
    let book = new Book(bookName.value, bookAuthor.value, bookIsbn.value);
    books.push(book.id);
    console.log(books);
    return book, books;
  }
}

const app = new App();
