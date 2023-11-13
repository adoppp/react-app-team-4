// import ExercisesCategories from './ExercisesCategories/ExercisesCategories'
import classNames from 'classnames/bind';
import styles from './ExercisesPage.module.scss';

const cn = classNames.bind(styles);

const ExercisesPage = () => {
  return (
    <>
    <section className={cn('section')}>
    <div>
        <h2>ExercisesPage</h2>
    </div>
      {/* <ExercisesCategories/> */}
    </section>
    </>
  )
}

export default ExercisesPage