import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Execrcises.modules.scss';
import { Icon } from '../../../ui/Icon';

const cn = classNames.bind(styles);

const Execrcises = () => {
    return (
        <div className={cn('execrcises')}>
            <div className={cn('execrcises_item')}>
                <p className={cn('execrcises_text')}>Execrcises</p>
                <div className={cn('execrcises_list')}>
                    <a className={cn('execrcises_link')}>Add product</a>
                    <Link to='/diary'>
                        <Icon
                            iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </Link>
                </div>
            </div>
            <form className={cn('execrcises_form')}>
                <p className={cn('execrcises__text')}>Body Part</p>
                <input className={cn('execrcises_input')} type="text" placeholder='Waist' />
                <p className={cn('execrcises__text')}>Equipment</p>
                <input className={cn('execrcises_input')} type="text" placeholder='Body weight' />
                <p className={cn('execrcises__text')}>Name</p>
                <input className={cn('execrcises_input')} type="text" placeholder='3/4 sit-up' />
            </form>
            <div className={cn('execrcises_items')}>
                <div>
                    <p className={cn('execrcises__text')}>Target</p>
                    <input className={cn('execrcises_inputs')} type="text" placeholder='Abc' />
                </div>
                <div>
                    <p className={cn('execrcises__text')}>Burned Calories</p>
                    <input className={cn('execrcises_inputs')} type="text" placeholder='220' />
                </div>
                <div>
                    <p className={cn('execrcises__text')}>Time</p>
                    <input className={cn('execrcises_inputs')} type="text" placeholder='60' />
                </div>
                <Link className={cn('execrcises_trash')} to='/diary'>
                    <Icon
                        iconId='icon-trash'
                        w={20}
                        h={20}
                    />
                </Link>
            </div>
            <form className={cn('execrcises_form')}>
                <p className={cn('execrcises__text')}>Body Part</p>
                <input className={cn('execrcises_input')} type="text" placeholder='Waist' />
                <p className={cn('execrcises__text')}>Equipment</p>
                <input className={cn('execrcises_input')} type="text" placeholder='Body weight' />
                <p className={cn('execrcises__text')}>Name</p>
                <input className={cn('execrcises_input')} type="text" placeholder='45° side bend' />
            </form>
            <div className={cn('execrcises_items')}>
                <div>
                    <p className={cn('execrcises__text')}>Target</p>
                    <input className={cn('execrcises_inputs')} type="text" placeholder='Abc' />
                </div>
                <div>
                    <p className={cn('execrcises__text')}>Burned Calories</p>
                    <input className={cn('execrcises_inputs')} type="text" placeholder='323' />
                </div>
                <div>
                    <p className={cn('execrcises__text')}>Time</p>
                    <input className={cn('execrcises_inputs')} type="text" placeholder='60' />
                </div>
                <Link className={cn('execrcises_trash')} to='/diary'>
                    <Icon
                        iconId='icon-trash'
                        w={20}
                        h={20}
                    />
                </Link>
            </div>
            <form className={cn('execrcises_form')}>
                <p className={cn('execrcises__text')}>Body Part</p>
                <input className={cn('execrcises_input')} type="text" placeholder='Waist' />
                <p className={cn('execrcises__text')}>Equipment</p>
                <input className={cn('execrcises_input')} type="text" placeholder='Body weight' />
                <p className={cn('execrcises__text')}>Name</p>
                <input className={cn('execrcises_input')} type="text" placeholder='Air bike' />
            </form>
            <div className={cn('execrcises_items')}>
                <div>
                    <p className={cn('execrcises__text')}>Target</p>
                    <input className={cn('execrcises_inputs')} type="text" placeholder='Abc' />
                </div>
                <div>
                    <p className={cn('execrcises__text')}>Burned Calories</p>
                    <input className={cn('execrcises_inputs')} type="text" placeholder='312' />
                </div>
                <div>
                    <p className={cn('execrcises__text')}>Time</p>
                    <input className={cn('execrcises_inputs')} type="text" placeholder='60' />
                </div>
                <Link className={cn('execrcises_trash')} to='/diary'>
                    <Icon
                        iconId='icon-trash'
                        w={20}
                        h={20}
                    />
                </Link>
            </div>
        </div>
    );
}

export default Execrcises;
