import classNames from 'classnames/bind';

import styles from './ExercisesTable.module.scss';
import { Icon } from '../../../ui/Icon';

const cn = classNames.bind(styles);

const ExercisesTable = () => {
    const IconButtonStyles = {
        marginLeft: 6,
    };

    return (
        <div className={cn('product__container')}>
            <div className={cn('container__header')}>
                <h2>Execrcises</h2>
                <button className={cn('button')}>
                    Add exercise
                    <Icon
                        iconId="icon-arrow-big"
                        w={16}
                        h={16}
                        customStyles={IconButtonStyles}
                    />
                </button>
            </div>

            <ul className={cn('container__list')}>
                <li>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Body Part</h3>
                        <p className={cn('container__input', 'title')}>Waist</p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Equipment</h3>
                        <p className={cn('container__input', 'category')}>
                            Body weight
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Name</h3>
                        <p className={cn('container__input', 'name')}>
                            3/4 sit-up
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Target</h3>
                        <p className={cn('container__input__small', 'target')}>
                            Abs
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>
                            Burned Calories
                        </h3>
                        <p className={cn('container__input__small', 'burned')}>
                            100
                        </p>
                    </div>
                    <div className={cn('small-gap')}>
                        <h3 className={cn('container__label')}>Time</h3>
                        <p className={cn('container__input__small', 'time')}>
                            60
                        </p>
                    </div>
                    <span>
                        <Icon
                            iconId="icon-trash"
                            w={20}
                            h={20}
                            customStyles={{}}
                        />
                    </span>
                </li>
                <li>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Body Part</h3>
                        <p className={cn('container__input', 'title')}>Waist</p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Equipment</h3>
                        <p className={cn('container__input', 'category')}>
                            Body weight
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Name</h3>
                        <p className={cn('container__input', 'name')}>
                            3/4 sit-up
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Target</h3>
                        <p className={cn('container__input__small', 'target')}>
                            Abs
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>
                            Burned Calories
                        </h3>
                        <p className={cn('container__input__small', 'burned')}>
                            100
                        </p>
                    </div>
                    <div className={cn('small-gap')}>
                        <h3 className={cn('container__label')}>Time</h3>
                        <p className={cn('container__input__small', 'time')}>
                            60
                        </p>
                    </div>
                    <span>
                        <Icon
                            iconId="icon-trash"
                            w={20}
                            h={20}
                            customStyles={{}}
                        />
                    </span>
                </li>
                <li>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Body Part</h3>
                        <p className={cn('container__input', 'title')}>Waist</p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Equipment</h3>
                        <p className={cn('container__input', 'category')}>
                            Body weight
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Name</h3>
                        <p className={cn('container__input', 'name')}>
                            3/4 sit-up
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Target</h3>
                        <p className={cn('container__input__small', 'target')}>
                            Abs
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>
                            Burned Calories
                        </h3>
                        <p className={cn('container__input__small', 'burned')}>
                            100
                        </p>
                    </div>
                    <div className={cn('small-gap')}>
                        <h3 className={cn('container__label')}>Time</h3>
                        <p className={cn('container__input__small', 'time')}>
                            60
                        </p>
                    </div>
                    <span>
                        <Icon
                            iconId="icon-trash"
                            w={20}
                            h={20}
                            customStyles={{}}
                        />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export { ExercisesTable };
