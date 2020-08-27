import {AddNote} from '../cmps/AddNote.jsx'
import {NotesList} from '../cmps/NotesList.jsx'
import { keepStorage } from '../services/keep-srotage.js'

export class KeepApp extends React.Component {

    state = {
        notes: null
    }

    componentDidMount() {
       this.loadNotes(null)
    }

    loadNotes = (notes) =>{
        
        if(notes) this.setState({ notes })
        else {
            keepStorage.getNotes()
                .then(notes => this.setState({ notes }))
        }
    }

    render() {

        if(!this.state.notes) return <div>Loading...</div>

        return (
            <div className="Keep-app">
               
                <AddNote loadNotes={this.loadNotes}/>
                <NotesList notes={this.state.notes} loadNotes={this.loadNotes}/>
            </div>

        )
    }
}
