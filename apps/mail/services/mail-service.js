

export const emailService = {
  query,
  onRead,
  getById,
  getRandomId,
  addEmail,
  deleteEmail,
  setStar,
  starredQuery,
  progressCalc
}


let emails = [{
    id: '100',
    subject: '40% discount for the next 24 Hours!',
    body: 'Be sure to visit our shops ASAP, our promotion will expire within 24 hours!',
    isRead: false,
    isStarred: false,
    from: 'Mashbir',
    sentAt: '10/07/2020'
  },
  {
    id: '101',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    isStarred: false,
    from: 'Yossi Alkin',
    sentAt: '10/08/2020'
  },
  {
    id: '102',
    subject: 'Mate where are you?',
    body: 'Lets go surfing the swell in picking up! i got my quiver all ready , answer the phone buddy!!',
    isRead: false,
    isStarred: false,
    from: 'John John Florence',
    sentAt: '13/04/2020'
  },
  {
    id: '103',
    subject: 'Accetpance to Berklee',
    body: 'It is with gread pleasure that we anounce your acceptance to the Berklee School of Music!',
    isRead: false,
    isStarred: false,
    from: 'Berklee Boston',
    sentAt: '06/06/2020'
  },
  {
    id: '104',
    subject: 'Advertisment',
    body: 'Had enough of Tinder? Why wont you try findHer? Marriage guaranteed!',
    isRead: false,
    isStarred: false,
    from: 'findHer app inc.',
    sentAt: '13/04/2020'
  },
  {
    id: '105',
    subject: 'Municipality Billing',
    body: 'Dear sir, this is the last notice wesend you before we initiate legal actions against you. Please settle your fine number VF345GG amount:42 NIS',
    from: 'Aram Naharaiim Muni',
    isRead: false,
    isStarred: false,
    sentAt: '18/01/2019'
  }
]

function query() {
  return Promise.resolve(emails)
}

function starredQuery() {
  return Promise.resolve(_filterredEmailsbyStars())
}

function _filterredEmailsbyStars() {
  const starredEmails = emails.filter(email => email.isStarred === true)
  console.log("function_filterredEmailsbyStars -> starredEmails", starredEmails)
  return starredEmails
}

function onRead(emailId) {
  let emailIdx = emails.findIndex(email => email.id === emailId)
  if (emails[emailIdx].isRead) emails[emailIdx].isRead = false
  else emails[emailIdx].isRead = true
}

function getById(emailId) {
  const email = emails.find(email => email.id === emailId)
  return Promise.resolve(email)
}

function getRandomId(length = 4) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function addEmail(id, subject, body) {
  const newEmail = _createNewEmail(id, subject, body)
  console.log("addEmail -> newEmail", newEmail)
  emails.push(newEmail)
}



function _createNewEmail(id, subject, body) {
  return {
    id,
    subject,
    body,
    from: 'The AppSus App Team',
    isRead: false,
    isTrashed: false,
    sentAt: getCurrDate()
  }
}


function getCurrDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return today

}

function deleteEmail(emailId) {
  const emailIdx = emails.findIndex(email => email.id === emailId)
  emails.splice(emailIdx, 1)
}

function setStar(emailId) {
  const emailIdx = emails.findIndex(email => email.id === emailId)
  if (emails[emailIdx].isStarred) return emails[emailIdx].isStarred = false
  else emails[emailIdx].isStarred = true
}

function progressCalc() {
  const res = ((emails.filter(email => email.isRead === true)).length / emails.length) * 100
  console.log("progressCalc -> res", res)

  return res.toFixed(2)
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