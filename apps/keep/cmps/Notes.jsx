import { keepStorage } from '../services/keep-srotage.js'
import { Note } from '../cmps/Note.jsx'


export class Notes extends React.Component {

    state = {
        notes: null
    }

    componentDidMount() {
        keepStorage.getNotes()
            .then(notes => this.setState({ notes }))
    }


    render() {

        return (
            <div className="notes">
                { this.state.notes && 
                this.state.notes.map(note => <Note note={note} key={note.id} />)}

            </div>

        )
    }
}