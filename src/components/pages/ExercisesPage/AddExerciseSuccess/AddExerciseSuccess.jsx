import { Link } from 'react-router-dom';
import img from '../../../../assets/images/Thumb_up.png';
import { Button } from '../../../ui/Button';
import { Icon } from '../../../ui/Icon';
import styles from './AddExerciseSuccess.module.scss';
import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

const cn = classNames.bind(styles);

const AddExerciseSuccess = ({ closeModal, data }) => {
    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const buttonStylesAdd = {
        fontSize: 16,
        width: 162,
        height: isLargeScreen ? 52 : 42,
        padding: '12px 32px',
        color: 'rgba(239, 237, 232, 1)',
    };

  return (
    <div className={cn('successExercises')}>
        <img src={img} alt="ok" />
        <h2>Well done</h2>
        <ul className={cn('successExercises__list')}>
            <li >
                <p className={cn('successExercises__list_el')}>Your  time:&nbsp;</p>
                <p>{`${Math.floor(data.time / 60)}:${Math.floor(data.time % 60)}`}</p>
            </li>
            <li>
                <p className={cn('successExercises__list_el')}>Burned calories:&nbsp;</p>
                <p>{data.burnedCalories}</p>
            </li>
        </ul>
        <Button 
                type= {"button"} 
                label={'Next exercise'}
                action={() =>{closeModal()}}
                customContainerStyles={buttonStylesAdd}
            />
        <Link to="/diary">
            <div className={cn('successExercises__link')}>
                <p>To the diary</p>
                <Icon iconId="icon-arrow-next" w={16} h={16} />
            </div>
        </Link>
    </div>
  );
};

export {AddExerciseSuccess};