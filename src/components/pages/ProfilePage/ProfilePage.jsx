import {UserCard} from './UserCard';
import { UserForm } from '../../ui/UserForm';
import styles from './ProfilePage.module.scss';
import classNames from 'classnames/bind';
import { Title } from '../../global/Title/Title';
import { useMediaQuery } from 'react-responsive';

const cn = classNames.bind(styles);

const ProfilePage = () => {
    const isTablet = useMediaQuery({ minWidth: 768 });
    
    const titleStyle = isTablet ? { marginTop: 72 } : { marginTop: 40 };

    return (
        <div className={cn('Profile__Settings')}>
           <div className={cn('Profile__SettingsContainer')}>
            <Title
                title={'Profile Settings'}
                customContainerStyles={titleStyle}
            />
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
