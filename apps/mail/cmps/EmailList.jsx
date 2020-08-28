import { EmailPreview } from './EmailPreview.jsx'


export function EmailList({ emails, loadEmails, history }) {




    return (<div >
        
        <ul className="email-list">
            {emails.map(email =>
                <li className="li-grid space-between align-center" key={email.id}>
                    <EmailPreview email={email} history={history} loadEmails={loadEmails} />
                </li>)}
        </ul>
    </div>
    )
}