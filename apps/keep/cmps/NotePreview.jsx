import { EditNote } from './EditNote.jsx'
import { DynamicNote } from './DynamicNote.jsx'


export class NotePreview extends React.Component {
    state = {
        isEdit: false
    }

    changeEditState = () => {
        this.setState(prevState => ({isEdit: !prevState.isEdit}))
    }

    render() {
        return (
            <section className="note">
                <DynamicNote note={this.props.note} isEdit={this.state.isEdit}/>
                <EditNote noteId={this.props.note.id} loadNotes={this.props.loadNotes} changeEditState={this.changeEditState}/>
            </section>
        )
    }
}