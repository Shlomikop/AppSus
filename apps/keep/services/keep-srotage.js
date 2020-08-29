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
        },
        style: {
            backgroundColor: "#F9F3B4"
        }
    },
    {
        id: 'mjxj',
        noteType: "NoteText",
        info: {
            text: "Use notes to jot down questions, ideas, reminders, and anything you would write on paper!"
        },
        style: {
            backgroundColor: "#F1F3F8"
        }
    },
    {
        id: 'dfhsd',
        noteType: "NoteText",
        info: {
            text: "You can leave notes open on the screen while you work."
        },
        style: {
            backgroundColor: "#FD8B8B"
        }
    },
    {
        id: 'tukxd',
        noteType: "NoteText",
        info: {
            text: "His is convenient when you are using notes for saving information that you might need later"
        },
        style: {
            backgroundColor: "#F1F3F8"
        }
    },
    {
        noteType: "NoteImg",
        info: {
            url: "https://image.shutterstock.com/image-photo/fantastic-spring-view-cameo-island-260nw-789653536.jpg",
            text: "Me playing Mi"
        },
        style: {
            backgroundColor: "#F5F7F7"
        }
    },
    {
        id: 'dddgav',
        noteType: "NoteText",
        info: {
            text: "Type the text of the note. The note saves automatically."
        },
        style: {
            backgroundColor: "#F1F3F8"
        }
    }, {
        id: 'gsadfb',
        noteType: "NoteText",
        info: {
            text: "You can leave the note open while you work, and drag it to any location on your screen for easier viewing."
        },
        style: {
            backgroundColor: "#D6FFFF"
        }
    },
    {
        id: 'gsadfbgsdf',
        noteType: "NoteImg",
        info: {
            text: "Me in Indonesia",
            url: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
        },
        style: {
            backgroundColor: "#F5F7F7"
        }
    },


];
