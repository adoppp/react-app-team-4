import { Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ExercisesPage.module.scss';
import { Title } from '../../global/Title';
import { ExercisesCategories } from './ExercisesCategories';
import { Icon } from '../../ui/Icon';

const cn = classNames.bind(styles);

const ExercisesPage = () => {
  const params = useParams();

  const upperCaseName = (el) => el[0].toUpperCase() + el.slice(1)

  const title = params.workout ? upperCaseName(params.workout) : 'Exercises'


  return (
    <section className={cn('exercises')}>
          {params.workout && <Link className={cn('exercises__button_back')} to=".." relative="path" >
        <Icon iconId="icon-arrow-back" w={16} h={16}/>
        <p>Back</p>
    </Link>}
      <div className={cn('exercises__categories')}>
        <Title title={`${title}`} />
        <ExercisesCategories/>
      </div>
      <Suspense>
        <Outlet />
     </Suspense>
    </section>
  );
};

export default ExercisesPage;