
export class NoteImg extends React.Component {

    state = {
        text: '',
        url: '',
    }

    componentDidMount() {
        this.setState({ url: this.props.note.info.url })
        this.setState({ text: this.props.note.info.text })
    }

    render() {

        if (!this.state.url) return <div>Loading...</div>;

        return (
            <div>
                <div className="img-note">
                    <p>{this.state.text}</p>
                    <img className="img-in-note" src={this.state.url} />
                </div>
            </div>
        )
    }
}

