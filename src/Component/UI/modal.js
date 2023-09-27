import React from "react";
import ReactDOM from "react-dom";
import classes from './modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick} ></div>
    )
}
const ModalOverlays = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>

    )
}



const Modal = (props) => {
    return (
        <React.Fragment>

            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClick} />, document.getElementById("overlays"))}
            {ReactDOM.createPortal(
                <ModalOverlays>{props.children}</ModalOverlays>, document.getElementById("overlays"))}
        </React.Fragment>
    )
}

export default Modal;