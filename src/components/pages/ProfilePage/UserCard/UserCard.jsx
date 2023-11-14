import React from 'react';
import { Icon } from '../../../ui/Icon';
import styles from './UserCard.module.scss'
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const UserCard = () => {

    return (
        <div className={cn('usercard__container')}>
            <div className={cn('usercard__profile')}>
                <div className={cn('container__svg')}>
                    <div className={cn('usercard__VectorProfile')}>
                        <Icon iconId="icon-Vector-profile" w={62} h={62} />
                    </div>
                    <div className={cn('usercard__checkMark')}>
                        <Icon iconId="icon-check-mark" w={24} h={24} />
                    </div>
                </div>
                <div className={cn('userName__container')}>
                    <h3 className={cn('user__name')}>Anna Rybachok</h3>
                    <div className={cn('user__user')}>User</div>
                </div>
                <div className={cn('daily__container')}>
                    <div className={cn('daily__calorieAndNorm')}>
                        <div className={cn('daily__calorieContainer')}>
                            <div className={cn('daily__icon')}>
                                <Icon iconId="icon-fluent_food" w={20} h={20} />
                                <div>Daily calorie intake</div>
                            </div>
                            <div>0 </div>
                        </div>
                    </div>
                    <div className={cn('daily__calorieAndNorm')}>
                        <div className={cn('daily__calorieContainer')}>
                            <div className={cn('daily__icon')}>
                                <Icon iconId="icon-dumbbell" w={20} h={20} />
                                <div>Daily physical activity</div>
                            </div>
                            <div>0 min</div>
                        </div>
                    </div>
                </div>
                <div className={cn('profile__warning')}>
                    <Icon iconId="icon-icons" w={24} h={24} />
                    <div>We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.</div>
                </div>
                 <button className={cn('logout__button')}>
                Logout
                <Icon
                    iconId="icon-log-out"
                    w={24}
                    h={24}
                    customStyles={{ marginLeft: 8 }}
                />
            </button>
            </div>
        </div>
       
    )
};

export default UserCard;