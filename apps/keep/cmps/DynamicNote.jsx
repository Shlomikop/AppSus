import { NoteText } from './notes-type/NoteText.jsx'


export function DynamicNote ({ note, isEdit }) {

    switch (note.noteType) {
        case 'NoteText':
            return <NoteText note={note} isEdit={isEdit}/>
        case 'NoteText':
            return <NoteImg note={note} isEdit={isEdit}/>

    }
}