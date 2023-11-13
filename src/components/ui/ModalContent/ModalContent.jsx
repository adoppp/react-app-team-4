import classNames from 'classnames/bind';

import styles from './ModalContent.module.scss';
import { Icon } from '../Icon';

const cn = classNames.bind(styles);

const ModalContent = ({
    children,
    onClose,
    containerClass,
    handleBackdropClick,
}) => {
    return (
        <div className={cn('modal')} onClick={handleBackdropClick}>
            <div className={cn('modal__container')}>
                <button onClick={onClose} className={cn('modal__close')}>
                    <Icon iconId="icon-close-btn" w={26} h={26} />
                </button>
                <div className={containerClass}>{children}</div>
            </div>
        </div>
    );
};

export { ModalContent };
