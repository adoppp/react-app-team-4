import classNames from 'classnames/bind';
import { Icon } from '../../ui/Icon';
import styles from './DayDashboard.module.scss';

const cx = classNames.bind(styles);

const DayDashboard = () => {
    const iconStyles = {
        fill: '#EF8964',
        marginRight: '6px',
    };

    return (
        <div>
            <ul className={cx('container')}>
                <li className={cx('user-daily-items')}>
                    <div className={cx('user-daily')}>
                        <Icon
                            iconId="icon-fork-knife"
                            w={20}
                            h={20}
                            customStyles={iconStyles}
                        />
                        <p className={cx('user-daily-text')}>
                            Daily calorie intake
                        </p>
                    </div>

                    <p className={cx('user-daily-text-value')}>0</p>
                </li>

                <li className={cx('user-daily-items')}>
                    <div className={cx('user-daily')}>
                        <Icon
                            iconId="icon-dumbbell"
                            w={20}
                            h={20}
                            customStyles={iconStyles}
                        />
                        <p className={cx('user-daily-text')}>
                            Daily physical activity
                        </p>
                    </div>

                    <p className={cx('user-daily-text-value')}>0 min</p>
                </li>

                <li className={cx('user-daily-items')}>
                    <div className={cx('user-daily')}>
                        <Icon
                            iconId="icon-apple"
                            w={20}
                            h={20}
                            customStyles={iconStyles}
                        />
                        <p className={cx('user-daily-text')}>
                            Calories consumed
                        </p>
                    </div>

                    <p className={cx('user-daily-text-value')}>0 </p>
                </li>

                <li className={cx('user-daily-items')}>
                    <div className={cx('user-daily')}>
                        <Icon
                            iconId="icon-calories"
                            w={20}
                            h={20}
                            customStyles={iconStyles}
                        />
                        <p className={cx('user-daily-text')}>Calories burned</p>
                    </div>

                    <p className={cx('user-daily-text-value')}>0 </p>
                </li>

                <li className={cx('user-daily-items')}>
                    <div className={cx('user-daily')}>
                        <Icon
                            iconId="icon-bubble"
                            w={20}
                            h={20}
                            customStyles={iconStyles}
                        />
                        <p className={cx('user-daily-text')}>
                            Calories remaining
                        </p>
                    </div>

                    <p className={cx('user-daily-text-value')}>0 </p>
                </li>

                <li className={cx('user-daily-items')}>
                    <div className={cx('user-daily')}>
                        <Icon
                            iconId="icon-running-figure"
                            w={20}
                            h={20}
                            customStyles={iconStyles}
                        />
                        <p className={cx('user-daily-text')}>
                            Sports remaining
                        </p>
                    </div>

                    <p className={cx('user-daily-text-value')}>0 min</p>
                </li>
            </ul>

            <p className={cx('user-notification')}>
                <span>
                    <Icon
                        iconId="icon-exclamation-mark"
                        w={24}
                        h={24}
                        customStyles={{ bacground: '#EFA082' }}
                    />
                </span>
                Record all your meals in the calorie diary every day. This will
                help you be aware of your nutrition and make informed choices.
            </p>
        </div>
    );
};

export { DayDashboard };
