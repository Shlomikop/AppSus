
export const emailService = {
  query,
  onRead,
  getById,
  getRandomId
}


let emails = [{
    id: '100',
    subject: '40% discount for the next 24 Hours!',
    body: 'Be sure to visit our shops ASAP, our promotion will expire within 24 hours!',
    isRead: false,
    isTrashed: false,
    from: 'Mashbir',
    sentAt: '10/07/2020'
  },
  {
    id: '101',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    isTrashed: false,
    from: 'Yossi Alkin',
    sentAt: '10/08/2020'
  },
  {
    id: '102',
    subject: 'Mate where are you?',
    body: 'Lets go surfing the swell in picking up! i got my quiver all ready , answer the phone buddy!!',
    isRead: false,
    isTrashed: false,
    from: 'John John Florence',
    sentAt: '13/04/2020'
  },
  {
    id: '103',
    subject: 'Accetpance to Berklee',
    body: 'It is with gread pleasure that we anounce your acceptance to the Berklee School of Music!',
    isRead: false,
    isTrashed: false,
    from: 'Berklee Boston',
    sentAt: '06/06/2020'
  },
  {
    id: '104',
    subject: 'Advertisment',
    body: 'Had enough of Tinder? Why wont you try findHer? Marriage guaranteed!',
    isRead: false,
    isTrashed: false,
    from: 'findHer app inc.',
    sentAt: '13/04/2020'
  },
  {
    id: '105',
    subject: 'Municipality Billing',
    body: 'Dear sir, this is the last notice wesend you before we initiate legal actions against you. Please settle your fine number VF345GG amount:42 NIS',
    from: 'Aram Naharaiim Municipality',
    isRead: false,
    isTrashed: false,
    sentAt: '18/01/2019'
  }
]

function query() {
  return Promise.resolve(emails)
}

function onRead(emailId) {
  let emailIdx = emails.findIndex(email => email.id === emailId)
  emails[emailIdx].isRead = true
  console.log(emails[emailIdx].isRead);
}

function getById(emailId) {
  const email = emails.find(email => email.id === emailId)
  return Promise.resolve(email)
}

function getRandomId(length=4){
  var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
// function getBooks() {
//   return Promise.resolve(books)
// }

// // function getBookById(bookId) {
// //   storageService.getBooksFromStore()
// //   .then(books => {

// //       const book = books.find(book => book.id === bookId)
// //       console.log("getBookById -> book", book)
// //       return Promise(book)
// // }

// function getBookById(bookId) {
//  return storageService.getBooksFromStore()
//   .then(books => books.find(book => book.id === bookId))


// }

// function getTodayDate() {
//   var today = new Date();
//   var day = String(today.getDate()).padStart(2, '0');
//   var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var year = today.getFullYear();

//   today = year + '-' + month + '-' + day;
//   return today;
// }

// function addReview(bookId, review) {
//   books.forEach(book => {
//     if (book.id === bookId) {
//       if (!book.reviews) {
//         book.reviews = [];
//       }
//       book.reviews.push(review)
//     }
//   })
// }