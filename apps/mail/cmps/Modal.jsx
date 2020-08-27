
export class Modal extends React.Component {
    state = {
        isShown: false
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.toggleModal && !prevState.isShown) this.setState({ isShown: true })
    }



    closeModal = () => {
        this.props.closeParentModal()
        this.setState({ isShown: false })
    }

    render() {
        const { isShown } = this.state
        // const { children } = this.props
        return (
            <div className={`modal-wrapper ${isShown ? '' : 'hide'}`} onClick={this.closeModal} >
                <div className="modal-content" onClick={(ev) => ev.stopPropagation()}>
                    <button onClick={this.closeModal}>X</button>
                    {/* {children} */}
                </div>
            </div >
        )
    }
}
