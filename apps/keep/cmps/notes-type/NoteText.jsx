
export class NoteText extends React.Component {

    state = {
        text: '',
        isEdit: false
    }

    componentDidMount() {
        this.setState({ text: this.props.note.info.text })
        this.setState({ isEdit: this.props.isEdit })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isEdit !== this.props.isEdit) this.setState({ isEdit: this.props.isEdit })
    }

    getRowNum = () => {
        const strLength = this.state.text.length
        const rowNum = Math.ceil(strLength / 38);
        return rowNum;
    }

    handleTextChange = (ev) => {
        this.setState({ text: ev.target.value })
    }

    render() {
        if (!this.state.text) return <div>Loading...</div>;
        const status = this.state.isEdit ? 'readOnly' : 'disabled'
        return (
            <div>
                {this.state.isEdit && <textarea rows={this.getRowNum()}
                    className="text-note" value={this.state.text}
                    readonly onChange={this.handleTextChange}></textarea>}


                {!this.state.isEdit && <textarea rows={this.getRowNum()}
                    className="text-note" value={this.state.text}
                    disabled></textarea>}
            </div>
        )
    }
}

