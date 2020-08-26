export const storageService = {
    saveBooks,
    getBooksFromStore
}

function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

function getBooksFromStore() {
    return new Promise((resolve, reject) => {
        const books = JSON.parse(localStorage.getItem('books'))
        if(!books) reject("Failure to load books");
        resolve(books);
    })
}
