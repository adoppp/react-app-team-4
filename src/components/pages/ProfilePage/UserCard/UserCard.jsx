import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import styles from './UserCard.module.scss';
import { Icon } from '../../../ui/Icon';
import { userSelector } from '../../../../storage/selectors/authSelectors';
import { avatarUpdate } from '../../../../storage/operations/authThunk';
import { useState } from 'react';
import { logout } from '../../../../storage/operations/authThunk';

const cn = classNames.bind(styles);

const UserCard = () => {
    const [avatar, setAvatar] = useState(``);
    const userData = useSelector(userSelector);
    const dispatch = useDispatch();

    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const userSvgStyles = isLargeScreen ? 16 : 14;

    const handleFileChange = (event) => {
        event.preventDefault();
        const selectedFile = event.target.files[0];

        const formData = new FormData();
        formData.append('avatar', selectedFile);

        dispatch(avatarUpdate(formData));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    // const isGravatar = userData.avatarURL.includes('gravatar');

    // const avatarPath = isGravatar ? `${userData.avatarURL}` : `https://powerpulse-171j.onrender.com/${userData.avatarURL}`;

    return (
        <div className={cn('usercard__container')}>
            <div className={cn('usercard__profile')}>
                <div className={cn('container__svg')}>
                    <div className={cn('usercard__VectorProfile')}>
                    {
                        userData.avatarURL ?    
                        <img src={userData.avatarURL ? `${userData.avatarURL}` : ''} alt='avatar' /> :    
                        (<Icon
                            iconId="icon-user"
                            w={userSvgStyles}
                            h={userSvgStyles}
                        />)
                    }
                    </div>
                    <div className={cn('usercard__checkMark')}>
                        <Icon iconId="icon-check-mark" w={isLargeScreen ? 32 : 24} h={isLargeScreen ? 32 : 24} />
                        <input type="file" name="avatar" id="avatar" onChange={handleFileChange}/>
                    </div>
                </div>
                <div className={cn('userName__container')}>
                    <h3 className={cn('user__name')}>{userData.name}</h3>
                    <p className={cn('user__user')}>User</p>
                </div>
                <div className={cn('daily__container')}>
                    <div className={cn('daily__calorieAndNorm')}>
                        <div className={cn('daily__calorieContainer')}>
                            <div className={cn('daily__icon')}>
                                <Icon iconId="icon-fluent_food" w={20} h={20} />
                                <p>Daily calorie intake</p>
                            </div>
                            <div className={cn('daily__value')}>0</div>
                        </div>
                    </div>
                    <div className={cn('daily__calorieAndNorm')}>
                        <div className={cn('daily__calorieContainer')}>
                            <div className={cn('daily__icon')}>
                                <Icon iconId="icon-dumbbell" w={20} h={20} />
                                <p>Daily physical activity</p>
                            </div>
                            <div className={cn('daily__valueMin')}>0 min</div>
                        </div>
                    </div>
                </div>
                <div className={cn('profile__warning')}>
                    <div>
                 <Icon iconId="icon-icons" w={24} h={24} />
                    </div>
                    <p>We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.</p>
                </div>
                <div className={cn('logout__container')}>
                 <button className={cn('logout__button')} onClick={handleLogout}>
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
        </div>
    )
};

export { UserCard };