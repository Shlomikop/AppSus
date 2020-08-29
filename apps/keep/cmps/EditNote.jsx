import { keepService } from '../services/keep-service.js'
import { keepStorage } from './services/keep-srotage.js'

export class EditNote extends React.Component {

    state = {
        isEdit: false,
    }

    handleRemove = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                keepService.removeNote(this.props.noteId)
                    .then(newNotes => {
                        keepStorage.saveNotes(newNotes)
                        this.props.loadNotes(newNotes)
                    })
            }
        })
    }

    handleEdit = () => {
        this.props.changeEditState();
        this.setState({ isEdit: true });
    }

    handleDoneEdit = () => {
        this.setState({ isEdit: false });
        this.props.changeEditState();
        this.modalDoneEdit(); //modal
    }

    modalDoneEdit = () => {
        keepService.doneEditModal()
    }

    render() {
        const status = this.state.isEdit;
        return (
            status ?
                <section className="edit-note flex">
                    <div className="done-edit-btn animate__animated animate__fadeIn" onClick={this.handleDoneEdit}>done</div>
                </section> :
                <section className="edit-note flex">
                    <div className="edit-note edit-btn animate__animated animate__fadeIn" onClick={this.handleEdit}><i className="fas fa-edit edit-small-btn"></i></div>
                    <div className="remove-note edit-btn animate__animated animate__fadeIn" onClick={this.handleRemove}><i className="fas fa-trash edit-small-btn"></i></div>
                </section>

        )
    }
}

