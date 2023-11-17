import { Field, Form, Formik } from 'formik';
import { Button } from '../ui/Button';
// import { Icon } from '../ui/Icon';
import styles from './ProductsFilters.module.scss';
import classNames from 'classnames/bind';
import { Select } from '../ui/Select/Select';

const cn = classNames.bind(styles);


const ProductsFilters = () => {
  const customSelectStyle = {
    width: 173,
  };

  const listSelectStyle = {
    height: 98,
    overflow: 'hidden',
  }


  return <>
    
       <Formik
       initialValues={{
        search: '',
        select: '',
       }}
       onSubmit={values => {
         console.log(values);
       }}
    >

         <Form className={cn('form_container')}>
        <div className={cn('form_container_input')}>
           <Field
            className={cn('input')}
            type='text'
            name='search'
            autoComplete='off'
            autoFocus
          placeholder="Search" />
        <button className={cn('button_form')}
          type='submit'>o</button>
         </div>
          
          <Select />
          <Select customSelectStyle={customSelectStyle} customListSelectStyle={listSelectStyle} />
          
         </Form>
    </Formik>
    

  </>
  

};

export { ProductsFilters };