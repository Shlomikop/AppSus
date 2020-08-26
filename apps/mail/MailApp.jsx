import { emailService } from './services/mail-service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'


export class MailApp extends React.Component {

    state = {
        emails: [],
        filterBy: ''
    }

    componentDidMount() {
        this.loadEmails()
       
    }

    loadEmails = () => {
        emailService.query()
            .then(emails => {
                this.setState({ emails })
            })
    }

    get emailsToShow() {

        return this.state.emails.filter(email => email.subject.toLowerCase().includes(this.state.filterBy.toLowerCase()))

    }
    setFilter = (filterBy) => {
        this.setState({ filterBy })
    }



    render() {

        return <section className="mail-app flex column">
            <h1>emails</h1>
            <EmailFilter setFilter={this.setFilter} />
            <EmailList emails={this.emailsToShow} history={this.props.history}/>


        </section>
    }
}