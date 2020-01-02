import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function InfoModal(modalTitle,modalBody,buttonText,showModal) {

    const [show, setShow] = React.useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    React.useEffect(() =>{
        if (showModal) {
            handleShow()
        }
    })

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalBody}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        {buttonText}
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default InfoModal
