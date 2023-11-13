import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ExercisesCategories.module.scss';

const cn = classNames.bind(styles);

const ExercisesCategories = () => {

  return (
      <div className={cn('exercises_category_container')}>
        <NavLink className={cn('exercises_category_name')} to="body-parts" >Body parts</NavLink>
        <NavLink className={cn('exercises_category_name')} to="muscles" >Muscles</NavLink>
        <NavLink className={cn('exercises_category_name')} to="equipment" >Equipment</NavLink>
      </div>
  );
};

export default ExercisesCategories;