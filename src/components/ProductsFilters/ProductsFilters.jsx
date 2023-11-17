import { Field, Form, Formik } from 'formik';
import { Button } from '../ui/Button';
// import { Icon } from '../ui/Icon';
import styles from './ProductsFilters.module.scss';
import classNames from 'classnames/bind';
import { Select } from '../ui/Select/Select';
import { useState } from 'react';
import { Icon } from '../ui/Icon';

const cn = classNames.bind(styles);


const ProductsFilters = () => {
  const [inputValue, setInputValue] = useState('');

  const hendleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleClearInput = () => {
    setInputValue('')
  };
  const IconStyles = {
     
   }


  const customSelectStyle = {
    width: 173,
  };

  const listSelectStyle = {
    height: 98,
    overflow: 'hidden',
  };

  const selectList = ['All','Recommended','Not recommended']


  return <>
    
       <Formik
       initialValues={{
        search: '',
       }}
       onSubmit={values => {
         console.log(values);
       }}
    >

         <Form className={cn('form_container')}>
        <div className={cn('form_container_input')}>
           <Field
            className={cn( 'input')}
            type='text'
            name='search'
            value={inputValue}
            autoComplete='off'
            autoFocus
            placeholder="Search"
            onChange={hendleInputChange}
          
          />
          {inputValue && (<button type='button' className={cn('button_x')}
            onClick={handleClearInput}
          >
             <Icon
            iconId='icon-error'
            w={18}
              h={18}
              customStyles={IconStyles}
            />
          </button>)}
          
        <button className={cn('button_form')}
          type='submit'>o</button>
         </div>
          
          <Select />
          <Select list={selectList} customSelectStyle={customSelectStyle} customListSelectStyle={listSelectStyle} />
          
         </Form>
    </Formik>
    

  </>
  

};

export { ProductsFilters };