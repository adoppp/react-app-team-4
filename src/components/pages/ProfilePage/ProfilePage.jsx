import {UserCard} from '../../UserCard';
import { UserForm } from '../../ui/UserForm';
import styles from './ProfilePage.module.scss';
import classNames from 'classnames/bind';
import { Title } from '../../global/Title/Title';

const cn = classNames.bind(styles);

const ProfilePage = () => {

    return (
        <div className={cn('Profile__Settings')}>
           <div className={cn('Profile__SettingsContainer')}>
            <Title title={'Profile Settings'}/>
            <div className={cn('container')}>
                <UserCard />
                    <div className={cn('decorative-line')}></div>
                    
                <UserForm />
            </div>
        </div>
        </div>
    );
};

export default ProfilePage;
