import { keepStorage } from './keep-srotage.js'

export const noteService = {
  addNote
}


function getBookById(bookId) {
  return storageService.getBooksFromStore()
    .then(books => books.find(book => book.id === bookId))
}

function getTodayDate() {
  var today = new Date();
  var day = String(today.getDate()).padStart(2, '0');
  var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var year = today.getFullYear();

  today = year + '-' + month + '-' + day;
  return today;
}

function addReview(bookId, review) {
  books.forEach(book => {
    if (book.id === bookId) {
      if (!book.reviews) {
        book.reviews = [];
      }
      book.reviews.push(review)
    }
  })
}


function addNote(note) {
  note.id = getRandId();
  keepStorage.getNotes()
    .then(notes => {
      notes.push(note);
      keepStorage.saveNotes(notes);
    })
    .catch(() => {
      console.log("get Notes from store failed...");
    })
}

function getRandId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}
