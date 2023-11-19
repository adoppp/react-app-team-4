import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../ui/Loader/Loader';
import classNames from 'classnames/bind';

import styles from './ExercisesPage.module.scss';
import { Title } from '../../global/Title';
import { ExercisesCategories } from '../../ExercisesCategories/ExercisesCategories';

import ExercisesList from '../../ExercisesList/ExercisesList';

import { Link } from 'react-router-dom';
import { Icon } from '../../ui/Icon/Icon';

const cn = classNames.bind(styles);

const ExercisesPage = () => {
  return (
    <section className={cn('exercises')}>
      <div className={cn('exercises__categories')}>
        <Title title='Exercises' />
        <ExercisesCategories/>
      </div>
      <Suspense fallback={<Loader/>}>
        <Outlet />
     </Suspense>
     <div className={cn('container')}>
            <div className={cn('container_item')}>
                <Link to="/exercises" />
                {/* <h2>ExercisesPage</h2> */}
                <div className={cn('container_block')}>
                    <div>
                        <div className={cn('container_icon')}>
                            <Icon iconId='icon-arrow'
                                w={16}
                                h={16}
                            />
                            <p>Back</p>
                        </div>
                        <h2 className={cn('container_title')}>Waist</h2>
                    </div>
                    <div className={cn('container_box')}>
                        <p>Body parts</p>
                        <p>Muscles</p>
                        <p>Equipment</p>
                    </div>
                </div>
                <ExercisesList />
            </div>
        </div>
    </section>
  );
};

export default ExercisesPage;