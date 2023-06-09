import React from 'react';

const ConfirmModal = ({title, successButtonName, message, closeModal, modalDate, successAction}) => {
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                <label
                 onClick={()=> successAction(modalDate)}
                  htmlFor="confirm-modal"
                className="btn btn-success">Delete</label>
                <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ConfirmModal;