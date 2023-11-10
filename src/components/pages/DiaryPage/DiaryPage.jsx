import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './DiaryPage.module.scss';
import { Icon } from '../../ui/Icon';

const cn = classNames.bind(styles);

const DiaryPage = () => {
    return (
        <main className={cn('main')}>
            <section>
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
            </section>
            <section>
                <div className={cn('protucts')}>
                    <div className={cn('protucts_item')}>
                        <p className={cn('products_text')}>Products</p>
                        <a className={cn('products_link')}>Add product</a>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-arrow'
                                w={16}
                                h={16}
                            />
                        </Link>
                    </div>
                    <form>
                        <p className={cn('products__text')}>Title</p>
                        <input className={cn('products_input')} type="text" placeholder='Bread Hercules grain' />
                        <p className={cn('products__text')}>Category</p>
                        <input className={cn('products_input')} type="text" placeholder='Flour' />
                        <div>
                            <p className={cn('products__text')}>Calories</p>
                            <input type="number" placeholder='289' />
                            <p className={cn('products__text')}>Weight</p>
                            <input type="number" placeholder='100' />
                            <p className={cn('products__text')}>Recommend</p>
                            <input type="text" placeholder='Yes' />
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
                        <input type="text" placeholder='Rice semolina Garnets gluten-free' />
                        <p>Category</p>
                        <input type="text" placeholder='Cereals' />
                        <div>
                            <p>Calories</p>
                            <input type="number" placeholder='340' />
                            <p>Weight</p>
                            <input type="number" placeholder='100' />
                            <p>Recommend</p>
                            <input type="text" placeholder='Yes' />
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
                        <input type="text" placeholder='Venison stew Specia' />
                        <p>Category</p>
                        <input type="text" placeholder='Meat' />
                        <div>
                            <p>Calories</p>
                            <input type="number" placeholder='81' />
                            <p>Weight</p>
                            <input type="number" placeholder='100' />
                            <p>Recommend</p>
                            <input type="text" placeholder='No' />
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
                        <input type="text" placeholder='Waist' />
                        <p>Equipment</p>
                        <input type="text" placeholder='Body weight' />
                        <p>Name</p>
                        <input type="text" placeholder='3/4 sit-up' />
                        <div>
                            <p>Target</p>
                            <input type="text" placeholder='Abc' />
                            <p>Burned Calories</p>
                            <input type="number" placeholder='220' />
                            <p>Time</p>
                            <input type="number" placeholder='60' />
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
                        <input type="text" placeholder='Waist' />
                        <p>Equipment</p>
                        <input type="text" placeholder='Body weight' />
                        <p>Name</p>
                        <input type="text" placeholder='45° side bend' />
                        <div>
                            <p>Target</p>
                            <input type="text" placeholder='Abc' />
                            <p>Burned Calories</p>
                            <input type="number" placeholder='323' />
                            <p>Time</p>
                            <input type="number" placeholder='60' />
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
                        <input type="text" placeholder='Waist' />
                        <p>Equipment</p>
                        <input type="text" placeholder='Body weight' />
                        <p>Name</p>
                        <input type="text" placeholder='Air bike' />
                        <div>
                            <p>Target</p>
                            <input type="text" placeholder='Abc' />
                            <p>Burned Calories</p>
                            <input type="number" placeholder='312' />
                            <p>Time</p>
                            <input type="number" placeholder='60' />
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