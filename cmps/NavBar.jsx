


const { NavLink, withRouter } = ReactRouterDOM

function _NavBar(props) {    
    return (
        <nav className="nav-bar">
            <NavLink to="/keep">Keep</NavLink>|
            <NavLink to="/mail">Mail</NavLink>|
        </nav>
    )
}

export const NavBar = withRouter(_NavBar)
