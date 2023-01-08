import React from "react"
import classes from "./Modal.module.css"

const Modal = ({ children, visible, setVisible }) => {
    let rootClasses = [classes.modal]
    if (visible) {
        rootClasses.push(classes.active)
    }
    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(" ") }>
            <div onClick={(e) => e.stopPropagation()} className={classes.modalContent}>
                {children}
            </div>
        </div>
    )
}

export default Modal