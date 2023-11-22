import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalContent } from '../ModalContent';

const Modal = ({ children, error, customClose }) => {
    const [showModal, setShowModal] = useState(true);

    const modalRoot = document.getElementById('modal');

    const handleClose = () => {
        if (!customClose) setShowModal(false);
        customClose();
    };

    const handleKeydown = (e) => {
        if (e.code === 'Escape') {
            setShowModal(false);
            customClose();
        }     
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowModal(false)
            customClose();
        };
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    useEffect(() => {
        setShowModal(true);
    }, [setShowModal]);

    return (
        <>
            {showModal &&
                createPortal(
                    <ModalContent
                        onClose={handleClose}
                        handleBackdropClick={handleBackdropClick}
                        error={error}
                    >
                        {children}
                    </ModalContent>,
                    modalRoot,
                )}
        </>
    );
};

export { Modal };
