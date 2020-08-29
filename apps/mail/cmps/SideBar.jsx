import { emailService } from '../services/mail-service.js'

export class SideBar extends React.Component {

    state = {
        progress: this.props.progress
    }



    //  componentDidUpdate(prevProps,prevState){

    //  }
    setProgress = () => {
        if(this.state.progress===this.props.progress)return
        this.setState({progress:this.props.progress})
    }
    showInbox = () => {
        this.props.inbox()
    }
    showStarred = () => {
        this.props.setStarredEmails()
    }


    render() {
        this.setProgress()
        return <div className="side-bar-container">

            <a className="btn-compose" onClick={() => { this.props.toggleModal() }} ><div className="text-compose">Compose</div></a>
            <ul>
                <li onClick={this.showInbox}><i className="fas fa-inbox sidebar-inbox"></i> Inbox</li>
                <li onClick={this.showStarred}><i className="far fa-star sidebar-starred"></i> Starred</li>
                <span className="emails-read">Emails Read:</span>
                <div className="outer-progress-div"><div style={{ width: this.state.progress + '%' }} className="inner-progress-div">{this.state.progress + '%'}</div></div>

            </ul>

        </div>
    }
}
