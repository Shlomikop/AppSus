import {AddNote} from '../cmps/AddNote.jsx'
import {Notes} from '../cmps/Notes.jsx'

export class KeepApp extends React.Component {


    render() {

        return (
            <div className="Keep-app">
                <h1>Keep-app</h1>
                <AddNote/>
                <Notes />
            </div>

        )
    }
}
