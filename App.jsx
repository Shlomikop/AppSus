const Router = ReactRouterDOM.HashRouter
const { Switch, Route } = ReactRouterDOM
import { Home } from './pages/Home.jsx'
import { NavBar } from './cmps/NavBar.jsx'
import { KeepApp } from './apps/keep/KeepApp.jsx'
import { MailApp } from './apps/mail/MailApp.jsx'
import {EmailDetails} from './apps/mail/pages/EmailDetails.jsx'


export class App extends React.Component {

    render() {

        return (
            <Router>
                <div>
                <header>
                    <NavBar />
                </header>
                    <Switch>

                        <Route component={EmailDetails} path="/mail/:id" />
                        <Route component={KeepApp} path="/keep" />
                        <Route component={MailApp} path="/mail" />
                        <Route component={Home} path="/" />

                    </Switch>
                </div>
            </Router>
        )
    }
}
