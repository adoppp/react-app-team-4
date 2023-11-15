import React from 'react';
import { Icon } from '../Icon';
import classNames from 'classnames/bind';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './UserForm.module.scss';
import { Input } from '../Input/Input';
import {Button} from '../Button'

const cn = classNames.bind(styles);

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  height: Yup.number().min(150).required(),
  currentWeight: Yup.number().min(35).required(),
  desiredWeight: Yup.number().min(35).required(),
  birthday: Yup.date().required().test('is-adult', function (value) {
    const today = new Date();
    const userBirthday = new Date(value);
    const age = today.getFullYear() - userBirthday.getFullYear();

    if (age < 18) {
      return this.createError({ message: 'Користувач повинен бути старше 18 років' });
    }

    return true;
  }),
  blood: Yup.number().oneOf([1, 2, 3, 4]).required(),
  sex: Yup.string().oneOf(['male', 'female']).required(),
  levelActivity: Yup.number().oneOf([1, 2, 3, 4, 5]).required(),
});

const UserForm = () => {
  const initialValues = {
    name: 'Anna',
    email: 'Qwerty@gmail.com',
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    birthday: '',
    blood: '',
    sex: '',
    levelActivity: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={cn('UserFrom__container')}>
<Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label className={cn('basic__info')} >Basic info</label>
            <Field name="name" component={Input} />
          <ErrorMessage name="name" component="div" />
          </div>
          
          <div>
         <Field component={Input} type="email" name="email"/>
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label className={cn('basic__info')}>Height</label>
          <Field type="number" name="height" component={Input}/>
          <ErrorMessage name="height" component="div" />
        </div>

        <div>
          <label>Current Weight</label>
          <Field type="number" name="currentWeight" component={Input}/>
          <ErrorMessage name="currentWeight" component="div" />
        </div>

        <div>
          <label>Desired Weight</label>
          <Field type="number" name="desiredWeight" component={Input}/>
          <ErrorMessage name="desiredWeight" component="div" />
        </div>

        <div>
          <Field type="date" name="birthday" component={Input} />
          <ErrorMessage name="birthday" component="div" />
        </div>
          <div>
  <label>Blood</label>
  <div className={cn('blood__container')} >
    <label htmlFor="blood1">
      <Field type="radio" id="blood1" name="blood" value="1" />
      <div className="circle">1</div>
    </label>
    <label htmlFor="blood2">
      <Field type="radio" id="blood2" name="blood" value="2" />
      <div className="circle">2</div>
    </label>
    <label htmlFor="blood3">
      <Field type="radio" id="blood3" name="blood" value="3" />
      <div className="circle">3</div>
    </label>
    <label htmlFor="blood4">
      <Field type="radio" id="blood4" name="blood" value="4" />
      <div className="circle">4</div>
    </label>
  </div>
  <ErrorMessage name="blood" component="div" />
</div>


        <div className={cn('sex__container')} >
         <label className={cn('sex__label')}>
     <Field type="radio" name="sex" value="Male"/>
      <div className="circle">Male</div>
            </label>
            
            <label className={cn('sex__label')}>
     <Field type="radio" name="sex" value="Female"/>
      <div className="circle">Female</div>
    </label>
            <ErrorMessage name="sex" component="div" /> 
           
        </div>

          <div className={cn('levelActivity__container')}>
              
            <label className={cn('levelActivity__label')}>
     <Field type="radio" name="levelActivity" value="Female"/>
      <div className="circle">Sedentary lifestyle (little or no physical activity)</div>
            </label>
           <label className={cn('levelActivity__label')}>
     <Field type="radio" name="levelActivity" value="Female"/>
      <div className="circle">Light activity (light exercises/sports 1-3 days per week)</div>
            </label>
           <label className={cn('levelActivity__label')}>
     <Field type="radio" name="levelActivity" value="Female"/>
      <div className="circle">Moderately active (moderate exercises/sports 3-5 days per week)</div>
            </label>
           <label className={cn('levelActivity__label')}>
     <Field type="radio" name="levelActivity" value="Female"/>
      <div className="circle">Very active (intense exercises/sports 6-7 days per week)</div>
            </label>
            <label className={cn('levelActivity__label')}>
     <Field type="radio" name="levelActivity" value="Female"/>
      <div className="circle">Extremely active (very strenuous exercises/sports and physical work)</div>
    </label>
         
        </div>

          <div>
            <Button label="Save" buttonStyles="orange"/>
        </div>
      </Form>
    </Formik>
    </div>
  );
};

export {UserForm};

          