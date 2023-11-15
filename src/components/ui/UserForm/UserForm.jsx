import React from 'react';
import { Icon } from '../Icon';
import classNames from 'classnames/bind';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
    name: '',
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
    <div>
      <p>Basic info</p>
<Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Ім'я:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="height">Зріст (см):</label>
          <Field type="number" id="height" name="height" />
          <ErrorMessage name="height" component="div" />
        </div>

        <div>
          <label htmlFor="currentWeight">Поточна вага (кг):</label>
          <Field type="number" id="currentWeight" name="currentWeight" />
          <ErrorMessage name="currentWeight" component="div" />
        </div>

        <div>
          <label htmlFor="desiredWeight">Бажана вага (кг):</label>
          <Field type="number" id="desiredWeight" name="desiredWeight" />
          <ErrorMessage name="desiredWeight" component="div" />
        </div>

        <div>
          <label htmlFor="birthday">Дата народження:</label>
          <Field type="date" id="birthday" name="birthday" />
          <ErrorMessage name="birthday" component="div" />
        </div>

        <div>
          <label htmlFor="blood">Група крові:</label>
          <Field as="select" id="blood" name="blood">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Field>
          <ErrorMessage name="blood" component="div" />
        </div>

        <div>
          <label htmlFor="sex">Стать:</label>
          <Field as="select" id="sex" name="sex">
            <option value=""></option>
            <option value="male">Чоловіча</option>
            <option value="female">Жіноча</option>
          </Field>
          <ErrorMessage name="sex" component="div" />
        </div>

        <div>
          <label htmlFor="levelActivity">Рівень активності:</label>
          <Field as="select" id="levelActivity" name="levelActivity">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
          <ErrorMessage name="levelActivity" component="div" />
        </div>

        <div>
          <button type="submit">Відправити</button>
        </div>
      </Form>
    </Formik>
    </div>
  );
};

export {UserForm};

          