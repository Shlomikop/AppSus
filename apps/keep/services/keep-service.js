import { keepStorage } from './keep-srotage.js'

export const keepService = {
  addNote,
  removeNote,
  doneEditModal
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
  return keepStorage.getNotes()
    .then(notes => {
      notes.push(note);
      keepStorage.saveNotes(notes);
      return notes;
    })
    .catch(() => {
      console.log("get Notes from store failed...");
    })
}

function getRandId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

function removeNote(noteId) {
  return keepStorage.getNotes()
    .then(notes => notes.filter(note => note.id !== noteId))
    .catch((error) => {
      console.log(error);
    })
}

function doneEditModal() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}

