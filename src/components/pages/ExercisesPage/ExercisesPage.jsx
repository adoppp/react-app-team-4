import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../ui/Loader/Loader';
import classNames from 'classnames/bind';

import styles from './ExercisesPage.module.scss';
import { Title } from '../../global/Title';
import { ExercisesCategories } from '../../ExercisesCategories/ExercisesCategories';

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
    </section>
  );
};

export default ExercisesPage;