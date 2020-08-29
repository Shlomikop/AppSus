
export function NoteVideo({ note }) {
    
    if (!note.info.text) return <div>Loading...</div>
    
    const url = note.info.text.replace("watch?v=", "embed/");

    return <iframe src={url} className="img-in-note" frameborder="0" allowfullscreen></iframe>
}


