import ExercisesCategories from './ExercisesCategories/ExercisesCategories'
import classNames from 'classnames/bind';
import styles from './ExercisesPage.module.scss';

const cn = classNames.bind(styles);

const ExercisesPage = () => {
  return (
    <div className={cn('section')}>
        <h2>ExercisesPage</h2>
      <ExercisesCategories/>
    </div>
  );
};

export default ExercisesPage;