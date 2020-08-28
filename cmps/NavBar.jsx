


const { NavLink, withRouter } = ReactRouterDOM

function _NavBar(props) {
    return (
        <nav className="nav-bar flex align-center">
            <div className="nav-item-div flex align-center justify-center"><NavLink className="nav-item" to="/keep">Keep</NavLink></div>
            <div className="nav-item-div flex align-center justify-center"> <NavLink className="nav-item" to="/mail">Mail</NavLink></div>
            </nav> 
    )
}

export const NavBar = withRouter(_NavBar)
