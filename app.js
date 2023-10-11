const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", addBookToLibrary);

const newBook = document.querySelector("#new-book");
newBook.addEventListener("click", () => (bookForm.style.display = "block"));

const bookForm = document.querySelector("#form");

class Book {
  constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
  }
}

const myLibrary = [];
let addedBook;
