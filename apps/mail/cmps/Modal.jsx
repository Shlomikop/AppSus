import {emailService} from '../services/mail-service.js'

export class Modal extends React.Component {

    state = {
        isShown: false,
        newEmail:{
            subject:null,
            body:null,
            id: emailService.getRandomId()
        },
      
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.toggleModal && !prevState.isShown) this.setState({ isShown: true })
    }

    closeModal = () => {
        this.props.closeParentModal()
        this.setState({ isShown: false })
    }

 
      onInputChange=(ev)=>{
        const keyName= ev.target.name;
        const value=ev.target.value
        this.setState({...this.newEmail,[keyName]:value})
    }

    // onInputChange=(ev)=>{
    //     const keyName= ev.target.name;
    //     const value=ev.target.value
    //     this.setState({...this.newEmail,newEmail.[keyName]:value})
    // }


    render() {
        const { isShown } = this.state

        return (
            <div className={`modal-wrapper ${isShown ? '' : 'hide'}`} onClick={this.closeModal} >
                <div className="modal-content grid" onClick={(ev) => ev.stopPropagation()}>
                    <label className="new-msg-label" htmlFor="">To</label><header className="new-msg">New Message</header>
                    <input className="to-msg" type="text" />
                    <label className="subject-msg-label">Subject</label>
                    <input onClick={this.onInputChange} name="subject" className="subject-msg" type="text" name="" id="" />
                    <textarea onClick={this.onInputChange} name="body" className="body-msg"></textarea>
                    <div className="props-msg"></div>
                    <button className="send-msg" onClick={this.closeModal}>Send</button>
                    <i className="fas fa-trash close-msg"></i>

                </div>
            </div >
        )
    }
}
