import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ExercisesCategories.module.scss';
import './ExercisesCategories.scss'

const cn = classNames.bind(styles);

const ExercisesCategories = () => {

  return (
      <ul className={cn('category__list')}>
        <li>
          <NavLink to='/exercises/body-parts' >
            <span>Body parts</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/exercises/muscles' >
            <span>Muscles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/exercises/equipment' >
            <span>Equipment</span>
          </NavLink>
        </li>
      </ul>
  );
  };

export { ExercisesCategories };