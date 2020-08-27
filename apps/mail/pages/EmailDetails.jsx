import { emailService } from '../../mail/services/mail-service.js'


export class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        console.log(this.state.email);
        const emailId = this.props.match.params.id;
        console.log(emailId);
        emailService.getById(emailId)
            .then(email => this.setState({ email }, () => console.log(this.state)))
    }

    render() {
        const { email } = this.state
        if (!email) return <h2>Loading..</h2>
        return <div className="flex column align-center">
            <h1>{email.subject}</h1>
            <span>{email.from}</span>
            <img src="" alt=""/>
            <hr/>
            <h2>{email.body}</h2>
        </div>
    }
}