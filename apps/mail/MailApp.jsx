// const { Route, Switch } = ReactRouterDOM  אולי תצטרך לבנות בעמוד הזה ראוטינג בין אימיילליסט לבין קומפוננטות אחרות

import { emailService } from './services/mail-service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'
import { SideBar } from '../mail/cmps/SideBar.jsx'
import { Modal } from './cmps/Modal.jsx'

export class MailApp extends React.Component {

    state = {
        emails: [],
        filterBy: '',
        isModalOpen: false,
        isStarredShown: false,
        starredEmails: []
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
        if (this.state.isStarredShown === false) {
            return this.state.emails.filter(email => email.subject.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        }else{ return this.state.starredEmails.filter(email => email.subject.toLowerCase().includes(this.state.filterBy.toLowerCase()))}
    }
    setFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    toggleModal = () => {
        this.setState({ isModalOpen: (this.state.isModalOpen ? false : true) })
    }

    closeParentModal = () => {
        this.setState({ isModalOpen: false })
    }

    setStarredEmails = () => {
        emailService.starredQuery()
            .then(starredEmails => {
                this.setState({ starredEmails})
            })
        console.log(this.state.starredEmails);
        this.setState({ isStarredShown: true })
    }
    backToInbox=()=>{
        this.setState({isStarredShown:false})
    }



    render() {

        return <section className="mail-app flex column">

            <EmailFilter setFilter={this.setFilter} />
            <div className="email-container w100P flex">

                <div className="twentyPw"><SideBar inbox={this.backToInbox} setStarredEmails={this.setStarredEmails} toggleModal={this.toggleModal} history={this.props.history} className="side-bar flex column" /></div>
                <div className="eightyPw"> <EmailList emails={this.emailsToShow} history={this.props.history} loadEmails={this.loadEmails} /></div>

            </div>
            <Modal closeParentModal={this.closeParentModal} toggleModal={this.state.isModalOpen}>
                <h1>
                    Modal!!
                  </h1>
            </Modal>
        </section>
    }
}