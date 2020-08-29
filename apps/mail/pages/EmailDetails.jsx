import { emailService } from '../../mail/services/mail-service.js'


export class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        const emailId = this.props.match.params.id;
        emailService.getById(emailId)
            .then(email => this.setState({ email }, () => console.log(this.state)))
    }

    onRemoveEmail = () => {
        emailService.deleteEmail(this.state.email.id)
        this.props.history.push('/mail')
        Swal.fire('Email Deleted')
    }
    onGoBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { email } = this.state
        if (!email) return <h2>Loading..</h2>
        return <div className="email-details flex column align-center h100vh">
            <i onClick={this.onGoBack} className="fas fa-backspace backspace"> Inbox</i>

            <div className="flex column twentyPh w100P space-evenly">
            <h1 style={{ display: 'inline' }}>{email.subject}</h1>
            <span>Sent from: <i className="far fa-address-card"> {email.from}</i></span>
            </div>

            <hr />

            <div className="flex column align-center w100P seventyPh space-evenly">
                <div className="email-body"><p className="w100P">{email.body}</p></div>
                <button className="btn-delete" onClick={this.onRemoveEmail}>Delete</button>
            </div>

        </div>
    }
}