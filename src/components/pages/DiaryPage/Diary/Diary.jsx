import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Diary.modules.scss';
import { Icon } from '../../../ui/Icon';

const cn = classNames.bind(styles);

const Diary = () => {
    return (
        <div>
            <div className={cn('dairy')}>
                <h2 className={cn('dairy_title')}>Diary</h2>
                <p className={cn('dairy_text')}>20/07/2023</p>
                <Link to='/diary'>
                    <Icon
                        iconId='icon-calendar'
                        w={20}
                        h={20}
                        customStyles={{ marginRight: 20 }}
                    />
                    <Icon
                        iconId='icon-left'
                        w={16}
                        h={16}
                        customStyles={{ marginRight: 6 }}
                    />
                    <Icon
                        iconId='icon-right'
                        w={16}
                        h={16}
                    />
                </Link>
            </div>
            <div className={cn('dairy_colection')}>
                <div className={cn('colection')}>
                    <div className={cn('dairy_box')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-food'
                                w={20}
                                h={20}
                                customStyles={{ marginRight: 8 }}
                            />
                        </Link>
                        <h3 className={cn('dairy__title')}>Daily calorie intake</h3>
                    </div>
                    <p className={cn('dairy__text')}>2200</p>
                </div>
                <div className={cn('colection')}>
                    <div className={cn('dairy_box')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-dumbbell'
                                w={20}
                                h={20}
                                customStyles={{ marginRight: 8 }}
                            />
                        </Link>
                        <h3 className={cn('dairy__title')}>Daily norm of sports</h3>
                    </div>
                    <p className={cn('dairy__text')}>110 min</p>
                </div>
                <div className={cn('colection')}>
                    <div className={cn('dairy_box')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-food-apple'
                                w={20}
                                h={20}
                                customStyles={{ marginRight: 8 }}
                            />
                        </Link>
                        <h3 className={cn('dairy__title')}>Сalories consumed</h3>
                    </div>
                    <p className={cn('dairy__text')}>707</p>
                </div>
                <div className={cn('colection')}>
                    <div className={cn('dairy_box')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-calories'
                                w={20}
                                h={20}
                                customStyles={{ marginRight: 8 }}
                            />
                        </Link>
                        <h3 className={cn('dairy__title')}>Сalories burned</h3>
                    </div>
                    <p className={cn('dairy__text')}>855</p>
                </div>
                <div className={cn('colection')}>
                    <div className={cn('dairy_box')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-bubble'
                                w={20}
                                h={20}
                                customStyles={{ marginRight: 8 }}
                            />
                        </Link>
                        <h3 className={cn('dairy__title')}>The rest of the calories</h3>
                    </div>
                    <p className={cn('dairy__text')}>1493</p>
                </div>
                <div className={cn('colection')}>
                    <div className={cn('dairy_box')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-figure'
                                w={20}
                                h={20}
                                customStyles={{ marginRight: 8 }}
                            />
                        </Link>
                        <h3 className={cn('dairy__title')}>The rest of sports</h3>
                    </div>
                    <p className={cn('dairy__text')}>85 min</p>
                </div>
            </div>
            <div className={cn('dairy_record')}>
                <Link to='/diary'>
                    <Icon
                        iconId='icon-exclamation-mark'
                        w={24}
                        h={24}
                        customStyles={{ marginRight: 8 }}
                    />
                </Link>
                <p className={cn('dairy_cytat')}>
                    Record all your meals in a calorie diary every day.
                    This will help me be aware of my nutrition and make me responsible for my choices.
                </p>
            </div>
        </div>
    );
}

export default Diary;
