import { noteService } from '../services/keep-service.js'



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
        ev.preventDefault();
        noteService.addNote(this.state.note)


        this.setState({ note: this.getEmptyNote() })
    }

    getEmptyNote() {
        return {
            noteType: 'NoteText',
            info: {
                text: '',
                url: null
            }
        }
    }


    render() {

        const placeHolder = this.getPlaceHolder();

        return (
            <div className="add-note">
                <form onSubmit={this.onSubmit}>
                    <input placeholder={placeHolder} type="text" onChange={this.handleValueChange} value={this.state.value} />
                </form>

            </div>

        )
    }
}