import React from 'react';

const Modal = ({
    headerText,
    hideModal,
    children,
    ...props
}) => {
    const hideModalOnClick = (event) => {
        if(event.target.className === "modal-wrapper"){
            hideModal();
        }
    }
    return(
        <div className="modal-wrapper" onClick={hideModalOnClick}>
                <div className="modal">
                    <div className="modal-header">
                        {/* <div className="close-modal">&#10006;</div>  */}
                        <p>{headerText}</p>
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
        </div>
    )
}

export default Modal;