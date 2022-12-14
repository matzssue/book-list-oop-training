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
    submit.addEventListener("click", this.addBook);
    listOfBooks.addEventListener("click", this.removeBook);
    this.getLocalStorage();
  }
  addBook(e) {
    e.preventDefault();
    if (!bookName.value == "") {
      let book = new Book(bookName.value, bookAuthor.value, bookIsbn.value);
      books.push(book);
      return books, book;
    } else {
      alert("title and author are required");
    }
  }
  removeBook(e) {
    if (e.target.className === "remove-btn") {
      e.target.closest("div").remove();
    }
  }
  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("books"));
    books = data;
    if (!data) return;
    data.forEach((book) => {
      let html = `<div class="book" id="${book.id}">
    <span class="book-name">${book.title}</span>
    <span class="author-name">${book.author}</span>
    <span class="ibsn-number">${book.isbn}</span>
    <span><button class="remove-btn">X</button></span>
  </div>`;
      listOfBooks.insertAdjacentHTML("beforeend", html);
    });
  }
}

const app = new App();

submit.addEventListener("click", function () {
  localStorage.setItem("books", JSON.stringify(books));
});
