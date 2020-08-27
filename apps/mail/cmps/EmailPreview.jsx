// const { Link } = ReactRouterDOM
import { emailService } from '../services/mail-service.js'



export class EmailPreview extends React.Component {

    state = {
        email: this.props.email,
        isRead: this.props.email.isRead,
        history: this.props.history

    }


    clickHandler = () => {
        emailService.onRead(this.state.email.id)
        this.setState({ isRead: true })
        // this.setState({isRead:(this.state.isRead?false:true)})  //good for unread/read!
        this.props.history.push(`/mail/${this.state.email.id}`)
    }

    render() {
        const { email } = this.state
        return <div className={`preview-main grid ${email.isRead ? "light-font" : "bold-font"}`} >
            <input className="checkbox" type="checkbox" />
            <p onClick={this.clickHandler} className="from-prev">{this.props.email.from}</p>
            <p onClick={this.clickHandler} className="subject-prev"> {this.props.email.subject}</p>
            <p onClick={this.clickHandler} className="date-prev"> {this.props.email.sentAt}</p>
        </div>

    }

}

