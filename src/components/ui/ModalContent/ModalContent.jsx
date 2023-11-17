import classNames from 'classnames/bind';

import styles from './ModalContent.module.scss';
import { Icon } from '../Icon';

const cn = classNames.bind(styles);

const ModalContent = ({
    children,
    onClose,
    containerClass,
    handleBackdropClick,
    error,
}) => {
    return (
        <div
            className={cn('modal', { [`${error}`]: error })}
            onClick={handleBackdropClick}
        >
            <div className={cn('modal__container')}>
                <button onClick={onClose} className={cn('modal__close')}>
                    <Icon iconId="icon-close-btn" w={26} h={26} />
                </button>
                {error ? (
                    <div>
                        <div className={cn('modal__svg')}>
                            <Icon iconId="icon-error" w={120} h={120} />
                        </div>
                        <h2 className={cn('error__title')}>Error</h2>
                    </div>
                ) : null}
                <div className={containerClass}>{children}</div>
            </div>
        </div>
    );
};

export { ModalContent };
