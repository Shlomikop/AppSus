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
        // reject("Failure to load notes");
    })
}

const notesBackup = [
    {
        id: 'swppiv',
        noteType: "NoteText",
        info: {
            text: "111Fullstack Me Baby!"
        }
    },
    {
        id: 'mjxj',
        noteType: "NoteText",
        info: {
            text: "222Fullstack Me Baby!"
        }
    }, 
    {
        id: 'dfhsd',
        noteType: "NoteText",
        info: {
            text: "333Fullstack Me Baby!"
        }
    }, 
    {
        id: 'tukxd',
        noteType: "NoteText",
        info: {
            text: "444Fullstack Me Baby!"
        }
    },{
        id: 'dddgav',
        noteType: "NoteText",
        info: {
            text: "555Fullstack Me Baby!"
        }
    },{
        id: 'gsadfb',
        noteType: "NoteText",
        info: {
            text: "666Fullstack Me Baby!"
        }
    },

];
