import { emailService } from './services/mail-service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'
import { SideBar } from '../mail/cmps/SideBar.jsx'
import { Modal } from './cmps/Modal.jsx'

export class MailApp extends React.Component {

    state = {
        emails: [],
        filterBy: '',
        isModalOpen:false

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

    toggleModal= ()=>{
        this.setState({isModalOpen:(this.state.isModalOpen?false:true)})
    }

    closeParentModal=()=>{
        this.setState({isModalOpen:false})
    }
    render() {

        return <section className="mail-app flex column">

            <h1>emails</h1>
            <EmailFilter setFilter={this.setFilter} />
            <div className="email-container w100P flex">

                <div className="twentyPw"><SideBar  toggleModal={this.toggleModal} className="side-bar flex column"/></div>
                <div className="eightyPw"> <EmailList emails={this.emailsToShow} history={this.props.history} /></div>

            </div>
            <Modal closeParentModal={this.closeParentModal} toggleModal={this.state.isModalOpen}>
                <h1>
                    Modal!!
                  </h1>
            </Modal>
        </section>
    }
}