import React from 'react';
import { Calendar } from '../Calendar/Calendar';
import classNames from 'classnames/bind';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './UserForm.module.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../storage/selectors/authSelectors';

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
  const user = useSelector(userSelector);

  const initialValues = {
    name: user.name,
    email: '',
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
        {({ errors, touched, values }) => (
          <Form>
            <div className={cn('basic__infoNameContainer')}>
              <div className={cn('basic__infoName')}>
                <label>Basic info</label>
                <Field name="name" className={cn(
                  'input',
                  { error: errors.name && touched.name },
                  { success: !errors.name && touched.name },
                )}
                />
                {errors.name && touched.name ? (
                    <div
                        className={cn({
                            errorLabel:
                                errors.name && touched.name,
                        })}
                    >
                        <Icon
                            iconId="icon-checkbox-circle"
                            w={16}
                            h={16}
                            customStyles={{
                                marginRight: 4,
                                fill: '#D80027',
                            }}
                        />
                        <span>{errors.name}</span>
                    </div>
                ) : null}
                {!errors.name && touched.name ? (
                    <div
                        className={cn({
                            successLabel:
                                !errors.name && touched.name,
                        })}
                    >
                        <Icon
                            iconId="icon-checkbox-circle"
                            w={16}
                            h={16}
                            customStyles={{
                                marginRight: 4,
                                fill: '#3CBF61',
                            }}
                        />
                        <span>{`Success name`}</span>
                    </div>
                ) : null
                }
              </div>
          
              <div className={cn('basic__infoMail')}>
                <Field type="email" name="email" readOnly placeholder={`${user.email}`} className={cn(
                  'input', 'disabled'
                )}
                  />
              </div>
            </div>
         
            <div className={cn('basic__infoInputContainer')}>
              <div className={cn('basic__info')}>
                <label>Height</label>
                <Field type="number" name="height" component={Input} />
                <ErrorMessage name="height" component="div" />
              </div>

              <div className={cn('basic__info')}>
                <label>Current Weight</label>
                <Field type="number" name="currentWeight" component={Input} />
                <ErrorMessage name="currentWeight" component="div" />
              </div>

              <div className={cn('basic__info')}>
                <label>Desired Weight</label>
                <Field type="number" name="desiredWeight" component={Input} />
                <ErrorMessage name="desiredWeight" component="div" />
              </div>

              <div className={cn('basic__info')}>
                <div className={cn('basic__calendary')}>
                  <Field type="date" name="birthday" component={Input} />
                </div>
            
              </div>
            </div>
            <div className={cn('blood__containerParent')}>
              <div>
                <label className={cn('label__blood')}>Blood</label>
                <div className={cn('blood__container')} >
                  <label>
                    <Field type="radio" id="blood1" name="blood" value="1" />
                    <p className={cn('circle')}>1</p>
                  </label>
                  <label htmlFor="blood2">
                    <Field type="radio" id="blood2" name="blood" value="2" />
                    <p className={cn('circle')}>2</p>
                  </label>
                  <label htmlFor="blood3">
                    <Field type="radio" id="blood3" name="blood" value="3" />
                    <p className={cn('circle')}>3</p>
                  </label>
                  <label htmlFor="blood4">
                    <Field type="radio" id="blood4" name="blood" value="4" />
                    <p className={cn('circle')}>4</p>
                  </label>
                </div>
                <ErrorMessage name="blood" component="div" />
              </div>

              <div className={cn('sex__container')} >
                <label className={cn('sex__label')}>
                  <Field type="radio" name="sex" value="Male" />
                  <p className={cn('circle')}>Male</p>
                </label>
                <label className={cn('sex__label')}>
                  <Field type="radio" name="sex" value="Female" />
                  <p className={cn('circle')}>Female</p>
                </label>
                <ErrorMessage name="sex" component="div" />
              </div>
            </div>
          
            <div className={cn('levelActivity__container')}>
              <label className={cn('levelActivity__label')} htmlFor="levelActivity1">
                <Field type="radio" id="levelActivity1" name="levelActivity" value="Sedentary" />
                <p className={cn('circle')}>Sedentary lifestyle (little or no physical activity)</p>
              </label>
              <label className={cn('levelActivity__label')} htmlFor="levelActivity2">
                <Field type="radio" id="levelActivity2" name="levelActivity" value="Light" />
                <p className={cn('circle')}>Light activity (light exercises/sports 1-3 days per week)</p>
              </label>
              <label className={cn('levelActivity__label')} htmlFor="levelActivity3">
                <Field type="radio" id="levelActivity3" name="levelActivity" value="Moderately" />
                <p className={cn('circle')}>Moderately active (moderate exercises/sports 3-5 days per week)</p>
              </label>
              <label className={cn('levelActivity__label')} htmlFor="levelActivity4">
                <Field type="radio" id="levelActivity4" name="levelActivity" value="Very" />
                <p className={cn('circle')}>Very active (intense exercises/sports 6-7 days per week)</p>
              </label>
              <label className={cn('levelActivity__label')} htmlFor="levelActivity5">
                <Field type="radio" id="levelActivity5" name="levelActivity" value="Extremely" />
                <p className={cn('circle')}>Extremely active (very strenuous exercises/sports and physical work)</p>
              </label>
            </div>

            <div>
              <Button label="Save" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export {UserForm};

          