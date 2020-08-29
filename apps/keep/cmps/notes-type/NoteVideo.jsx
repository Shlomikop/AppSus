
export class NoteImg extends React.Component {

    state = {
        text: '',
        url: '',
        isEdit: false,
    }

    componentDidMount() {
        this.setState({ url: this.props.note.info.url })
        this.setState({ text: this.props.note.info.text })
        // this.setState({ isEdit: this.props.isEdit })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.isEdit !== this.props.isEdit) this.setState({ isEdit: this.props.isEdit })
    // }

    // getRowNum = () => {
    //     const strLength = this.state.text.length
    //     const rowNum = Math.ceil(strLength / 38);
    //     return rowNum;
    // }

    // handleTextChange = (ev) => {
    //     this.setState({ text: ev.target.value })
    // }

    render() {

        if (!this.state.url) return <div>Loading...</div>;

        return (
            <div>
                {!this.state.isEdit &&
                    <div className="img-note">
                        <p>{this.state.text}</p>
                        <img className="img-in-note" src={this.state.url} />
                    </div>}
            </div>
        )
    }
}

