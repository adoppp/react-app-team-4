import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import styles from './ExercisesSubcategoriesItem.module.scss';
import './ExercisesSubcategoriesItem.scss'
import classNames from 'classnames/bind';
import { LiItem } from './ExercisesSubcategoriesItem.styled';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { Loader } from '../../../ui/Loader/Loader';
import { exercisesCategory } from '../../../../storage/operations/exercisesThunk';

const cn = classNames.bind(styles);

const ExercisesSubcategoriesItem = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [exercisesData, setExercisesData] = useState([]);
    const {categories} = useParams();

    const {data} = useSelector((state) => state.exercises);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(exercisesCategory());
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        };
    
        fetchData();
    }, [dispatch]);

useEffect(() => {
    if (exercisesData.length > 0) {
      setIsLoading(false);
    }
  }, [exercisesData]);

function upperCaseName(el) {
    setExercisesData(el.map((item) => ({ ...item, name: item.name[0].toUpperCase() + item.name.slice(1) })));
};

useEffect(() => {
if(data){
  switch (categories) {
    case 'body-parts':{
            const bodyParts = data.filter((element) => element.filter === 'Body parts')
            upperCaseName(bodyParts)
        break;}
        case 'muscles':{
                const muscles = data.filter((element) => element.filter === 'Muscles')
                upperCaseName(muscles)
        break;}
        case 'equipment':{
                const equipment = data.filter((element) => element.filter === 'Equipment')
                upperCaseName(equipment)
            break;}
        default:
            break;
  };
}
    }, [categories, data]);

    const settings = {
      dots: true,
      speed: 500,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      rows: 2,
      responsive: [
          {
              breakpoint: 1440,
              settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      rows: 3,
                  }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  rows: 10,
                  dots: true,
              }
          },
      ]
};

  return (
  <ul className={cn('subcategoriesItem')}>
  {isLoading 
  ? (<Loader/>) 
  : <Slider {...settings}  >
      {exercisesData.map((item)=>
        <Link  to={`/exercises/${categories}/${item.name.toLowerCase()}`}  key={item._id}>
          <LiItem src={item.imgURL}> 
            <div className={cn('subcategoriesItem__info')}>
                <h3 className={cn('subcategoriesItem__name')}>{item.name}</h3>
                <p className={cn('subcategoriesItem__filter')}>{item.filter}</p>
            </div>
          </LiItem>
      </Link>
      )}
    </Slider>
  }
  </ul>)
};

        export { ExercisesSubcategoriesItem };