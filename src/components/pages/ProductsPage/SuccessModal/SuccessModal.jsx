import React from 'react';
import classNames from 'classnames/bind';
import {Modal} from '../../../ui/Modal'; 
import styles from './SuccessModal.module.scss';
import { Button } from '../../../ui/Button';
import { Link } from 'react-router-dom';
import { Icon } from '../../../ui/Icon';

const cn = classNames.bind(styles);

const SuccessModal = ({ onClose, calories }) => {
    const IconButtonStyles = {
        marginLeft: 6,
        fill: '#EFEDE84D',
        stroke:'#EFEDE84D',
    } 
    const buttonStyles = {
        marginBottom: '28px',
        fontSize: '16px',
    }

    return (
        <Modal>
            <div className={cn('successModal')}>
                <h2>Well done</h2>
                <p className={cn('title_calories')}>
                Calories: <span>{calories}</span>
                </p>
                <Button
                    label="Next product"
                    action={onClose} 
                    customContainerStyles={buttonStyles}
                    buttonStyles="orange"
                />
                <button className={cn('button')}>
                    <Link to="/diary">To the diary</Link>
                    <Icon iconId='icon-arrow-big' w={16} h={16} customStyles={IconButtonStyles} />
                </button>
                
            </div>
        </Modal>
    );
};

export { SuccessModal };
