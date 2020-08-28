import { emailService } from '../services/mail-service.js'

export class Modal extends React.Component {

    state = {
        isShown: false,
        newEmail: {
            subject: '',
            body: '',
            id: emailService.getRandomId()
        },

    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.toggleModal && !prevState.isShown) this.setState({ isShown: true })
    }

    onInputChange = (ev) => {
        const keyName = ev.target.name;
        const value = ev.target.value

        this.setState(prevState => ({
            ...prevState,
            newEmail: {
                ...prevState.newEmail,
                [keyName]: value
            }
        }))
    }

    closeModal = () => {

        this.props.closeParentModal()
        this.setState({ isShown: false })
        this.setState(prevState => ({
            ...prevState,
            newEmail: {
                ...prevState.newEmail,
                subject: ''
            }
        }))
        this.setState(prevState => ({
            ...prevState,
            newEmail: {
                ...prevState.newEmail,
                body: ''
            }
        }))
        
    }

onAddEmail=()=>{
    const id =this.state.newEmail.id
    const subject =this.state.newEmail.subject
    const body =this.state.newEmail.body
    emailService.addEmail(id,subject,body)
    this.closeModal()
}

    // onInputChange=(ev)=>{
    //     const keyName= ev.target.name;
    //     const value=ev.target.value
    //     this.setState({...this.newEmail,newEmail.[keyName]:value})
    // }


    render() {
        const { isShown } = this.state
        const style = {fontFamily:'roboto,serif'}
        return (
            <div className={`modal-wrapper ${isShown ? '' : 'hide'}`} onClick={this.closeModal} >
                <div className="modal-content grid" onClick={(ev) => ev.stopPropagation()}>
                    <label className="new-msg-label" htmlFor="">To</label><header className="new-msg">New Message</header>
                    <input className="to-msg" type="text" />
                    <label className="subject-msg-label">Subject</label>
                    <input onChange={this.onInputChange} name="subject" className="subject-msg" type="text"/>
                    <textarea onChange={this.onInputChange} style={style} name="body" className="body-msg"></textarea>
                    <div className="props-msg"></div>
                    <button onClick={this.onAddEmail} className="send-msg">Send</button>
                    <i className="fas fa-trash close-msg" onClick={this.closeModal}></i>

                </div>
            </div >
        )
    }
}
