import { NoteText } from './notes-type/NoteText.jsx'
import { NoteImg } from './notes-type/NoteImg.jsx'


export function DynamicNote ({ note, isEdit }) {

    switch (note.noteType) {
        case 'NoteText':
            return <NoteText note={note} isEdit={isEdit}/>
        case 'NoteImg':
            return <NoteImg note={note} isEdit={isEdit}/>
        

    }
}