import { EditNote } from './EditNote.jsx'
import { DynamicNote } from './DynamicNote.jsx'


export class NotePreview extends React.Component {
    state = {
        isEdit: false,
        color: '#F5F7F7'
    }

    componentDidMount() {
        this.setState({color: this.props.note.style.backgroundColor})
    }

    changeEditState = () => {
        this.setState(prevState => ({isEdit: !prevState.isEdit}))
    }
    changeColor = (newColor) => {
        this.setState({color: newColor})
    }

    render() {
        return (
            <section className="note" style={{backgroundColor:this.state.color}}>
                <DynamicNote note={this.props.note} isEdit={this.state.isEdit}/>
                <EditNote changeColor={this.changeColor} noteId={this.props.note.id} loadNotes={this.props.loadNotes} changeEditState={this.changeEditState}/>
            </section>
        )
    }
}