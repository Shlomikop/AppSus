import {NoteText} from './notes-type/NoteText.jsx'
import {EditNote} from './EditNote.jsx'

function DynamicNote({note}) {

    switch (note.noteType) {
        case 'NoteText':
            return <NoteText note={note} />
        // case 'NoteText':
        //     return <NoteText note={note} />
       
    }
}

export function Note({note}){ //Dynamic note

    return (
    <section className="note">
        <DynamicNote note={note} />
        <EditNote noteId={note.id}/>
    </section>
    )
}