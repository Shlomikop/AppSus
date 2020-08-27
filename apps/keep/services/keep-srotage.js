export const keepStorage = {
    saveNotes,
    getNotes
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getNotes() {
    return new Promise((resolve, reject) => {
        let notes = JSON.parse(localStorage.getItem('notes'))
        if (!notes) {
            notes = notesBackup;
            saveNotes(notes);
        }
        resolve(notes);

        if (!notes) reject("Failure to load notes");//...
    })
}


const notesBackup = [
    {
        id: 'swppiv',
        noteType: "NoteText",
        info: {
            text: "Notes are the electronic equivalent of paper sticky notes."
        }
    },
    {
        id: 'mjxj',
        noteType: "NoteText",
        info: {
            text: "Use notes to jot down questions, ideas, reminders, and anything you would write on paper!"
        }
    },
    {
        id: 'dfhsd',
        noteType: "NoteText",
        info: {
            text: "You can leave notes open on the screen while you work."
        }
    },
    {
        id: 'tukxd',
        noteType: "NoteText",
        info: {
            text: "His is convenient when you are using notes for saving information that you might need later"
        }
    }, {
        id: 'dddgav',
        noteType: "NoteText",
        info: {
            text: "Type the text of the note. The note saves automatically."
        }
    }, {
        id: 'gsadfb',
        noteType: "NoteText",
        info: {
            text: "You can leave the note open while you work, and drag it to any location on your screen for easier viewing."
        }
    },
    // {
    //     type: "NoteImg",
    //     info: {
    //         url: "http://some-img/me",
    //         title: "Me playing Mi"
    //     },
    //     style: {
    //         backgroundColor: "#00d"
    //     }
    // }

];
