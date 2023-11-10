import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { CustomForm } from '../ui/Form';

import styles from './SignUp.module.scss';
import { Button } from '../ui/Button/Button';

const cn = classNames.bind(styles);

const SignUp = () => {

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
 
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('The name field is required'),
        email: Yup.string().matches(emailPattern).required('The email field is required'),
        password: Yup.string().min(6, 'The password field must contain at least 6 characters').required('The password field is required')
    })
    
    return (
    <section>
        <div className={cn('signup__container')}>
            <h2>Sign Up</h2>
            <p>
                Thank you for your interest in our platform.
                To complete the registration process,
                please provide us with the following information.
            </p>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}    
            >
            {({ errors, touched }) => (
            <Form className={cn('signup_form')}>
            <Field
                name="name"
                type="name"
                placeholder='name'
                className={cn('input',
                    { error: errors.name && touched.name },
                    { success: !errors.name && touched.name}
                )}
            />
            {errors.name && touched.name ? <div className={cn({ errorLabel: errors.name && touched.name, successLabel: !errors.name && touched.name })}>{errors.name}</div> : null}
            {!errors.name && touched.name ? <div className={cn({ successLabel: !errors.name && touched.name })}>{`Success name`}</div> : null}
            <Field
                name="email"
                type="email"
                placeholder='email'
                className={cn('input',
                    { error: errors.email && touched.email },
                    { success: !errors.email && touched.email}
                )}
            />
            {errors.email && touched.email ? <div className={cn({ errorLabel: errors.email && touched.email })}>{errors.email}</div> : null}
            {!errors.email && touched.email ? <div className={cn({ successLabel: !errors.email && touched.email })}>{`Success email`}</div> : null}
            <Field
                name="password"
                type="password"
                placeholder='password'
                className={cn('input',
                    { error: errors.password && touched.password },
                    { success: !errors.password && touched.password}
                )}
            />
            {errors.password && touched.password ? <div className={cn({ errorLabel: errors.password && touched.password })}>{errors.password}</div> : null}
            {!errors.password && touched.password ? <div className={cn({ successLabel: !errors.password && touched.password })}>{`Success password`}</div> : null}                
            <Button
                type={'submit'}
                label={'Sign Up'}
                customContainerStyles={{width: `fit-content`, marginTop: 14, marginBottom: 12}}
            />
            </Form>
            )}
            </Formik>
            <div className={cn('signup__container_link')}>
                <span>Already have an account? </span>
                <Link to='/signin'>Sign In</Link>
            </div>
        </div>
    </section>
    );
};

export { SignUp };