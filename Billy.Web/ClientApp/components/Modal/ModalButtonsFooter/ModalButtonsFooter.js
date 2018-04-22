import React from 'react';
const ModalButtonsFooter = ({
    acceptText,
    cancelText
}) => {
    return(
        <div className="modal-buttons-footer">
            <button type="submit">{acceptText}</button>
        </div>
    )
}

export default ModalButtonsFooter;