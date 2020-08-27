import { NotePreview } from './NotePreview.jsx'


export class NotesList extends React.Component {

    render() {

        const notes = this.props.notes;
        const loadNotes = this.props.loadNotes;

        return (
            <div className="notes">
                { notes && 
                notes.map(note => <NotePreview loadNotes={loadNotes} note={note} key={note.id} />)}

            </div>

        )
    }
}