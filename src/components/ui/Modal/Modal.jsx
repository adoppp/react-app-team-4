import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalContent } from '../ModalContent';

const Modal = ({ children }) => {
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        setShowModal(true);
    }, [setShowModal]);

    return (
        <>
            {showModal &&
                createPortal(
                    <ModalContent children={children} onClose={handleClose} />,
                    document.body,
                )}
        </>
    );
};

export { Modal };
