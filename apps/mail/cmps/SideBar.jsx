export function SideBar(props){


return <div className="side-bar-container">

<a className="btn-compose" onClick={()=>{props.toggleModal()}} ><div className="text-compose">Compose</div></a>
<ul>
    <li><i className="fas fa-inbox"></i> Inbox</li>
    <li><i className="far fa-star"></i> Starred</li>
    <li><i className="fas fa-paper-plane"></i> Sent Mail</li>
    <li><i className="fab fa-firstdraft"></i> Drafts</li>
    <li> percentage-bar</li>
    
    
</ul>

</div>
}