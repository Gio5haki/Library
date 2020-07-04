class Book {
  constructor(title, genre, author) {
    this._title = title;
    this._genre = genre;
    this._author = author;
    this._read = false;
    this._readDate = "";
  }
  markAsRead() {
    this._read = true;
    this._readDate = new Date(Date.now());
  }
}

class Library {
  constructor() {
    this._books = [];
    this._readCounter = 0;
    this._unreadCounter = this._books.length;
    this._currentBookRef = 0;
    this._nextBookRef = this._currentBookRef + 1;
  }
  addBook(book) {
    this._books.push(book);
    this._unreadCounter += 1;
  }
  finishCurrentBook() {
    const book = this._books[this._currentBookRef];
    book.markAsRead();
    this._nextBookRef += 1;
    this._currentBookRef += 1;
    //Since i don't declare a default value, i must check if the value exists, give it a 0 value if it doesn't
    if (!this._previousBookRef) this._previousBookRef = 0;
    else this._previousBookRef += 1;
    this._readCounter += 1;
    this._unreadCounter -= 1;
  }
}
//Creating 2 books
/*const got = new Book("GOT", "Fantastic", "Aria");
const tog = new Book("TOG", "LOL", "Jimmy");

//Creating an array based on those two books
const books = [got, tog];
*/
//creating the library with the array of two books
//const myLib = new Library(books);

//creating another new book
const newBook = new Book("star tresh", "space", "somedude");

const myLib = new Library();
//using the addBook method on this book
myLib.addBook(newBook);

//finishing first book
myLib.finishCurrentBook();

console.log(myLib);
// first book mark as read, with a date
// coutners are incremented
