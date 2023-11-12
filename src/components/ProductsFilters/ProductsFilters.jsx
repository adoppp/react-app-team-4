import { Field, Form, Formik } from 'formik';
import { Button } from '../ui/Button';
// import { Icon } from '../ui/Icon';
import styles from './ProductsFilters.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);


const ProductsFilters = () => {

  const ButtonStyles = {
    position: 'absolute',
    left: 200,
    backgroundColor:' transparent',
    
  }
  return <>
    
       <Formik
       initialValues={{
         search: '',
       }}
       onSubmit={values => {
         console.log(values);
       }}
    >
       {({ errors, touched }) => (
         <Form className={cn('form_container')}>
          <Field
            className={cn('input')}
            type='text'
            name='name'
            autoComplete='off'
            autoFocus
            placeholder="Search" />
          
           
          
           <Field className={cn('categories')} as='select' name='categories'>
             <option value='categories'>Categories</option>
            
          </Field>
           <Field className={cn('select')} as='select' name='color'>
             <option value='all'>All</option>
             <option value='rec'>Recommended</option>
             <option value='notrec'>Not recommended</option>
           </Field>
        <Button
         type={'submit'}
        customContainerStyles={ButtonStyles}
          >
        
          </Button>
         </Form>
       )}

     </Formik>

  </>
  

};

export { ProductsFilters };