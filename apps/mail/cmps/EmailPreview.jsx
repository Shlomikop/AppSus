import { emailService } from '../services/mail-service.js'

export class EmailPreview extends React.Component {

    state = {
        email: this.props.email,
        isRead: this.props.email.isRead,
        history: this.props.history,
        isStarred:null

    }

    onDeleteEmail = () => {
        emailService.deleteEmail(this.state.email.id)
        this.setState(prevState => ({
            ...prevState,
            email: {
                ...prevState.email,
                isTrashed: true
            }
        }))
        this.props.loadEmails()
    }

    clickHandler = () => {
        emailService.onRead(this.state.email.id)
        this.setState({ isRead: true })
        // this.setState({isRead:(this.state.isRead?false:true)})  //good for unread/read!
        this.props.history.push(`/mail/${this.state.email.id}`)
    }

onStarEmail=()=>{
   if(!this.state.isStarred) this.setState({isStarred:true})
   else this.setState({isStarred:false})
   emailService.setStar(this.state.email.id)
}
 
onReadUpdate=()=>{
    emailService.onRead(this.state.email.id)
    emailService.progressCalc()
    this.props.loadEmails()
    this.props.history.push('/mail')
}


    render() {
        const { email } = this.state
        return <div className={`preview-main grid ${email.isRead ? "light-font" : "bold-font"}`} >
            
            <div className="center-stars flex align-center justify-center">
                <i className={`fas fa-star full-star ${email.isStarred ? ' visible':' hidden'}`}></i>
                <i onClick={this.onStarEmail} className="far fa-star star"></i>
            </div>
            <i onClick={this.onReadUpdate} className="fas fa-envelope-open-text read-unread"></i>
            <i onClick={this.onDeleteEmail} className="far fa-trash-alt trash"></i>
            <p onClick={this.clickHandler} className="from-prev">{this.props.email.from}</p>
            <p onClick={this.clickHandler} className="subject-prev"> {this.props.email.subject}</p>
            <p onClick={this.clickHandler} className="date-prev"> {this.props.email.sentAt}</p>
        </div>

    }

}

