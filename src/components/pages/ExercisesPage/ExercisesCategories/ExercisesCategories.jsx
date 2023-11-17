import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ExercisesCategories.module.scss';

const cn = classNames.bind(styles);

const ExercisesCategories = () => {

  return (
      <ul className={cn('category__list')}>
        <li>
          <NavLink to="body-parts" >
            <span>Body parts</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="muscles" >
            <span>Muscles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="equipment" >
            <span>Equipment</span>
          </NavLink>
        </li>
      </ul>
  );
  };

export default ExercisesCategories;