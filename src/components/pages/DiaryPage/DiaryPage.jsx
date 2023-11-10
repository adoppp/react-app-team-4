import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './DiaryPage.module.scss';
import { Icon } from '../../ui/Icon';

const cn = classNames.bind(styles);

const DiaryPage = () => {
    return (
        <main>
            <section>
                <div className={cn('dairy')}>
                    <h2 className={cn('dairy_title')}>Diary</h2>
                    <Link to='/diary'>
                        <Icon
                            iconId='icon-calendar'
                            w={20}
                            h={20}
                            customStyles={{ marginRight: 8 }}
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
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-food'
                                w={20}
                                h={20}
                            />
                        </Link>
                        <p>Daily calorie intake</p>
                        <p>2200</p>
                    </div>
                    <div className={cn('colection')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-dumbbell'
                                w={20}
                                h={20}
                            />
                        </Link>
                        <p>Daily norm of sports</p>
                        <p>110 min</p>
                    </div>
                    <div className={cn('colection')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-food-apple'
                                w={20}
                                h={20}
                            />
                        </Link>
                        <p>Сalories consumed</p>
                        <p>707</p>
                    </div>
                    <div className={cn('colection')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-calories'
                                w={20}
                                h={20}
                            />
                        </Link>
                        <p>Сalories burned</p>
                        <p>855</p>
                    </div>
                    <div className={cn('colection')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-bubble'
                                w={20}
                                h={20}
                            />
                        </Link>
                        <p>The rest of the calories</p>
                        <p>1493</p>
                    </div>
                    <div className={cn('colection')}>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-figure'
                                w={20}
                                h={20}
                            />
                        </Link>
                        <p>The rest of sports</p>
                        <p>85 min</p>
                    </div>
                </div>
                <div>
                    <Link to='/diary'>
                        <Icon
                            iconId='icon-exclamation-mark'
                            w={24}
                            h={24}
                        />
                    </Link>
                    <p>
                        Record all your meals in a calorie diary every day. 
                        This will help me be aware of my nutrition and make me responsible for my choices.
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <p>Products</p>
                    <p>Add product</p>
                    <Link to='/diary'>
                        <Icon
                            iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </Link>
                    <form action="">
                        <p>Title</p>
                        <input type="text" placeholder='Bread Hercules grain'/>
                        <p>Category</p>
                        <input type="text" placeholder='Flour'/>
                        <div>
                            <p>Calories</p>
                            <input type="number" placeholder='289'/>
                            <p>Weight</p>
                            <input type="number" placeholder='100'/>
                            <p>Recommend</p>
                            <input type="text" placeholder='Yes'/>
                        </div>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-trash'
                                w={20}
                                h={20}
                            />
                        </Link>
                    </form>

                    <form action="">
                        <p>Title</p>
                        <input type="text" placeholder='Rice semolina Garnets gluten-free'/>
                        <p>Category</p>
                        <input type="text" placeholder='Cereals'/>
                        <div>
                            <p>Calories</p>
                            <input type="number" placeholder='340'/>
                            <p>Weight</p>
                            <input type="number" placeholder='100'/>
                            <p>Recommend</p>
                            <input type="text" placeholder='Yes'/>
                        </div>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-trash'
                                w={20}
                                h={20}
                            />
                        </Link>
                    </form>

                    <form action="">
                        <p>Title</p>
                        <input type="text" placeholder='Venison stew Specia'/>
                        <p>Category</p>
                        <input type="text" placeholder='Meat'/>
                        <div>
                            <p>Calories</p>
                            <input type="number" placeholder='81'/>
                            <p>Weight</p>
                            <input type="number" placeholder='100'/>
                            <p>Recommend</p>
                            <input type="text" placeholder='No'/>
                        </div>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-trash'
                                w={20}
                                h={20}
                            />
                        </Link>
                    </form>
                </div>
            </section>
            <section>
                <div>
                    <p>Execrcises</p>
                    <p>Add exercise</p>
                    <Link to='/diary'>
                        <Icon
                            iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </Link>
                    <form action="">
                        <p>Body Part</p>
                        <input type="text" placeholder='Waist'/>
                        <p>Equipment</p>
                        <input type="text" placeholder='Body weight'/>
                        <p>Name</p>
                        <input type="text" placeholder='3/4 sit-up'/>
                        <div>
                            <p>Target</p>
                            <input type="text"  placeholder='Abc'/>
                            <p>Burned Calories</p>
                            <input type="number"  placeholder='220'/>
                            <p>Time</p>
                            <input type="number"  placeholder='60'/>
                        </div>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-trash'
                                w={20}
                                h={20}
                            />
                        </Link>
                    </form>

                    <form action="">
                        <p>Body Part</p>
                        <input type="text" placeholder='Waist'/>
                        <p>Equipment</p>
                        <input type="text" placeholder='Body weight'/>
                        <p>Name</p>
                        <input type="text" placeholder='45° side bend'/>
                        <div>
                            <p>Target</p>
                            <input type="text"  placeholder='Abc'/>
                            <p>Burned Calories</p>
                            <input type="number"  placeholder='323'/>
                            <p>Time</p>
                            <input type="number"  placeholder='60'/>
                        </div>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-trash'
                                w={20}
                                h={20}
                            />
                        </Link>
                    </form>

                    <form action="">
                        <p>Body Part</p>
                        <input type="text" placeholder='Waist'/>
                        <p>Equipment</p>
                        <input type="text" placeholder='Body weight'/>
                        <p>Name</p>
                        <input type="text" placeholder='Air bike'/>
                        <div>
                            <p>Target</p>
                            <input type="text"  placeholder='Abc'/>
                            <p>Burned Calories</p>
                            <input type="number"  placeholder='312'/>
                            <p>Time</p>
                            <input type="number"  placeholder='60'/>
                        </div>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-trash'
                                w={20}
                                h={20}
                            />
                        </Link>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default DiaryPage;