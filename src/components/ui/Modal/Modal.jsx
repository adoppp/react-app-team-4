import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalContent } from '../ModalContent';

const Modal = ({ children, error }) => {
    const [showModal, setShowModal] = useState(true);

    const modalRoot = document.getElementById('modal');

    const handleClose = () => {
        setShowModal(false);
    };

    const handleKeydown = (e) => {
        if (e.code === 'Escape') setShowModal(false);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) setShowModal(false);
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
                        children={children}
                        onClose={handleClose}
                        handleBackdropClick={handleBackdropClick}
                        error={error}
                    />,
                    modalRoot,
                )}
        </>
    );
};

export { Modal };
