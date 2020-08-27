import { keepService } from '../services/keep-service.js'

export class AddNote extends React.Component {

    state = {
        note: {
            noteType: 'NoteText',
            info: {
                text: '',
                url: null
            }
        }
    }

    updateState(key, value) {
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                info: {
                    ...prevState.note.info,
                    [key]: value
                }
            }
        }))
    }

    handleValueChange = (ev) => {
        const newText = ev.target.value;
        this.updateState('text', newText);
    }

    getPlaceHolder() {
        switch (this.state.note.noteType) {
            case 'NoteText':
                return 'What\'s on your mine?'
                break;
        }
    }

    onSubmit = (ev) => {

        if (!this.state.note.info.text) return;

        ev.preventDefault();
        keepService.addNote(this.state.note)
            .then((notes) => { this.props.loadNotes(notes) })
        this.setState({ note: this.getEmptyNote('NoteText') })
    }

    getEmptyNote(type) {
        return {
            noteType: type,
            info: {
                text: '',
                url: null
            }
        }
    }

    changeNoteType = (type) => {
        this.setState({ note: this.getEmptyNote(type) })
    }

    render() {

        return (
            <div className="add-note flex justify-center ">
                <form onSubmit={this.onSubmit} className="flex">
                    <input placeholder={this.getPlaceHolder()}
                        type="text" onChange={this.handleValueChange}
                        value={this.state.note.info.text}
                        className="input-text"
                    />
                    <div className="flex">
                        <i className="fas fa-font control-add-btn" onClick={() => this.changeNoteType('NoteText')}></i>
                        <i className="fas fa-image control-add-btn" onClick={() => this.changeNoteType('NoteImg')}></i>
                    </div>
                </form>
            </div>
        )
    }
}