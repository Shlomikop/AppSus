import { keepService } from '../services/keep-service.js'

export class AddNote extends React.Component {

    state = {
        note: {
            noteType: 'NoteText',
            info: {
                text: '',
                url: null
            },
            style: {
                backgroundColor: "#F5F7F7"
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
        const key = ev.target.name;
        this.updateState(key, newText);
    }

    getPlaceHolder() {
        switch (this.state.note.noteType) {
            case 'NoteText':
                return 'What\'s on your mind?'
            case 'NoteImg':
                return 'Image title'
            case 'NoteVideo':
                return 'Enter video URL...'
        }
    }

    onSubmit = (ev) => {
        ev.preventDefault();

        if (!this.state.note.info.text) return;
        if (this.state.note.noteType === 'NoteImg' && !this.state.note.info.url) return;

        keepService.addNote(this.state.note)
            .then((notes) => { this.props.loadNotes(notes) })
        this.setState({ note: this.getEmptyNote(this.state.note.noteType) })
    }

    getEmptyNote(type) {
        return {
            noteType: type,
            info: {
                text: '',
                url: ''
            },
            style: {
                backgroundColor: "#F5F7F7"
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
                    {this.state.note.noteType === 'NoteImg' &&
                    <div className="flex animate__animated animate__backInLeft" onClick={this.onSubmit}>
                        <div><i class="far fa-plus-square add-img-btn"></i></div>
                        <input placeholder="Add image URL..."
                            type="text" onChange={this.handleValueChange}
                            value={this.state.note.info.url}
                            name="url"
                            className="input-text"
                        />
                    </div>
                    }
                    <input placeholder={this.getPlaceHolder()}
                        type="text" onChange={this.handleValueChange}
                        value={this.state.note.info.text}
                        name="text"
                        className="input-text animate__animated animate__backInLeft"
                    />
                    <div className="flex">
                        <i className="fas fa-font control-add-btn" onClick={() => this.changeNoteType('NoteText')}></i>
                        <i className="fas fa-image control-add-btn" onClick={() => this.changeNoteType('NoteImg')}></i>
                        <i className="fas fa-video control-add-btn" onClick={() => this.changeNoteType('NoteVideo')}></i>
                    </div>
                </form>
            </div>
        )
    }
}