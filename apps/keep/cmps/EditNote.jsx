

export function EditNote({noteId}){ 

    function handleRemove(){
        console.log(noteId);
    }

    return (
    <section className="edit-note">
       <div className="remove-note" onClick={handleRemove}>x</div>
    </section>
    )
}