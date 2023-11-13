import styles from './ExercisesList.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Icon } from '../../../ui/Icon/Icon';

const cn = classNames.bind(styles);

const ExercisesList = () => {
    return (
        <div className={cn('container')}>
            <Link to="/exercises" />
            <div className={cn('content')}>
                <div className={cn('content_start')}>
                    <h2 className={cn('content_start-title')}>WORKOUT</h2>
                    <p className={cn('content_start-text')}>Start</p>
                    <Icon iconId='icon-statr-arrow'
                        w={16}
                        h={16}
                    />
                </div>
                <div className={cn('content_figure')}>
                    <Icon iconId='icon-figure'
                        w={16}
                        h={16}
                    />
                    <h3 className={cn('content_figure-title')}>Air bike</h3>
                </div>
                <div className={cn('content_item')}>
                    <p>Burned calories:</p><span>312</span>
                    <p>Body part:</p><span>Waist</span>
                    <p>Target:</p>
                    <span className={cn('content_item-span')}>Abc</span>
                </div>
            </div>

            <div className={cn('content')}>
                <div className={cn('content_start')}>
                    <h2 className={cn('content_start-title')}>WORKOUT</h2>
                    <p className={cn('content_start-text')}>Start</p>
                    <Icon iconId='icon-statr-arrow'
                        w={16}
                        h={16}
                    />
                </div>
                <div className={cn('content_figure')}>
                    <Icon iconId='icon-figure'
                        w={16}
                        h={16}
                    />
                    <h3 className={cn('content_figure-title')}>3/4 sit-up</h3>
                </div>
                <div className={cn('content_item')}>
                    <p>Burned calories:</p><span>220</span>
                    <p>Body part:</p><span>Waist</span>
                    <p>Target:</p>
                    <span className={cn('content_item-span')}>Abc</span>
                </div>
            </div>

            <div className={cn('content')}>
                <div className={cn('content_start')}>
                    <h2 className={cn('content_start-title')}>WORKOUT</h2>
                    <p className={cn('content_start-text')}>Start</p>
                    <Icon iconId='icon-statr-arrow'
                        w={16}
                        h={16}
                    />
                </div>
                <div className={cn('content_figure')}>
                    <Icon iconId='icon-figure'
                        w={16}
                        h={16}
                    />
                    <h3 className={cn('content_figure-title')}>45° side ben</h3>
                </div>
                <div className={cn('content_item')}>
                    <p>Burned calories:</p><span>323</span>
                    <p>Body part:</p><span>Waist</span>
                    <p>Target:</p>
                    <span className={cn('content_item-span')}>Abc</span>
                </div>
            </div>

            <div className={cn('content')}>
                <div className={cn('content_start')}>
                    <h2 className={cn('content_start-title')}>WORKOUT</h2>
                    <p className={cn('content_start-text')}>Start</p>
                    <Icon iconId='icon-statr-arrow'
                        w={16}
                        h={16}
                    />
                </div>
                <div className={cn('content_figure')}>
                    <Icon iconId='icon-figure'
                        w={16}
                        h={16}
                    />
                    <h3 className={cn('content_figure-title')}>Barbell reverse preacher curl</h3>
                </div>
                <div className={cn('content_item')}>
                    <p>Burned calories:</p><span>153</span>
                    <p>Body part:</p><span>Waist</span>
                    <p>Target:</p>
                    <span className={cn('content_item-span')}>Biceps</span>
                </div>
            </div>

            <div className={cn('content')}>
                <div className={cn('content_start')}>
                    <h2 className={cn('content_start-title')}>WORKOUT</h2>
                    <p className={cn('content_start-text')}>Start</p>
                    <Icon iconId='icon-statr-arrow'
                        w={16}
                        h={16}
                    />
                </div>
                <div className={cn('content_figure')}>
                    <Icon iconId='icon-figure'
                        w={16}
                        h={16}
                    />
                    <h3 className={cn('content_figure-title')}>Barbell rollerout</h3>
                </div>
                <div className={cn('content_item')}>
                    <p>Burned calories:</p><span>87</span>
                    <p>Body part:</p><span>Waist</span>
                    <p>Target:</p>
                    <span className={cn('content_item-span')}>Abc</span>
                </div>
            </div>

            <div className={cn('content')}>
                <div className={cn('content_start')}>
                    <h2 className={cn('content_start-title')}>WORKOUT</h2>
                    <p className={cn('content_start-text')}>Start</p>
                    <Icon iconId='icon-statr-arrow'
                        w={16}
                        h={16}
                    />
                </div>
                <div className={cn('content_figure')}>
                    <Icon iconId='icon-figure'
                        w={16}
                        h={16}
                    />
                    <h3 className={cn('content_figure-title')}>Barbell side split squat v. 2</h3>
                </div>
                <div className={cn('content_item')}>
                    <p>Burned calories:</p><span>60</span>
                    <p>Body part:</p><span>Waist</span>
                    <p>Target:</p>
                    <span className={cn('content_item-span')}>Quads</span>
                </div>
            </div>

            <div className={cn('content')}>
                <div className={cn('content_start')}>
                    <h2 className={cn('content_start-title')}>WORKOUT</h2>
                    <p className={cn('content_start-text')}>Start</p>
                    <Icon iconId='icon-statr-arrow'
                        w={16}
                        h={16}
                    />
                </div>
                <div className={cn('content_figure')}>
                    <Icon iconId='icon-figure'
                        w={16}
                        h={16}
                    />
                    <h3 className={cn('content_figure-title')}>Bottoms-up</h3>
                </div>
                <div className={cn('content_item')}>
                    <p>Burned calories:</p><span>234</span>
                    <p>Body part:</p><span>Waist</span>
                    <p>Target:</p>
                    <span className={cn('content_item-span')}>Abc</span>
                </div>
            </div>

            <div className={cn('content')}>
                <div className={cn('content_start')}>
                    <h2 className={cn('content_start-title')}>WORKOUT</h2>
                    <p className={cn('content_start-text')}>Start</p>
                    <Icon iconId='icon-statr-arrow'
                        w={16}
                        h={16}
                    />
                </div>
                <div className={cn('content_figure')}>
                    <Icon iconId='icon-figure'
                        w={16}
                        h={16}
                    />
                    <h3 className={cn('content_figure-title')}>Cable lying fly</h3>
                </div>
                <div className={cn('content_item')}>
                    <p>Burned calories:</p><span>61</span>
                    <p>Body part:</p><span>Waist</span>
                    <p>Target:</p>
                    <span className={cn('content_item-span')}>Pectorals</span>
                </div>
            </div>
        </div>
    );
}

export default ExercisesList;
