
export function EmailFilter(props){
    return <section className="flex justify-center">
        <input className="search-bar"type="text" placeholder="Search mail" onChange={(ev)=>{props.setFilter(ev.target.value)}}/>
    </section>
}