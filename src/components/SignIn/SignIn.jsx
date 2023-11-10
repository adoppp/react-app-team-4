import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Icon } from '../ui/Icon'
import { Button } from "../ui/Button/Button";
import styles from './SignIn.module.scss';

const cn = classNames.bind(styles);

const SignIn = () => {

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    const validationSchema = Yup.object().shape({
        email: Yup.string().matches(emailPattern).required('The email field is required'),
        password: Yup.string().min(6, 'The password field must contain at least 6 characters').required('The password field is required')
    })

    return (
        <section>
            <div className={cn('signin_container')}>
                <Title
                    title='Sign In'
                    customContainerStyles={{ marginBottom: 14 }}
                />
                <p>
                    Welcome! Please enter your credentials
                    to login to the platform:
                </p>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}    
                >
                {({ errors, touched }) => (
                <Form className={cn('signin_form')}>
                <Field
                    name="email"
                    type="email"
                    placeholder='email'
                    className={cn('input',
                        { error: errors.email && touched.email },
                        { success: !errors.email && touched.email}
                    )}
                />
                {errors.email && touched.email ?
                    <div
                        className={cn(
                            { errorLabel: errors.email && touched.email }
                        )}
                    >
                        <Icon
                            iconId='icon-checkbox-circle'
                            w={16}
                            h={16}
                            customStyles={
                                {
                                    marginRight: 4,
                                    fill: '#D80027'
                                }
                            }
                        />
                        <span>
                            {errors.email}
                        </span>
                    </div> :
                    null
                }
                {!errors.email && touched.email ?
                    <div className={cn(
                        { successLabel: !errors.email && touched.email }
                    )}
                    >
                        <Icon
                            iconId='icon-checkbox-circle'
                            w={16}
                            h={16}
                            customStyles={
                                {
                                    marginRight: 4,
                                    fill: '#3CBF61'
                                }
                            }
                        />
                        <span>
                            {`Success email`}
                        </span>
                    </div> :
                    null
                }
                <Field
                    name="password"
                    type="password"
                    placeholder='password'
                    className={cn('input',
                        { error: errors.password && touched.password },
                        { success: !errors.password && touched.password}
                    )}
                />
                {errors.password && touched.password ?
                    <div
                        className={cn(
                            { errorLabel: errors.password && touched.password }
                        )}
                    >
                        <Icon
                            iconId='icon-checkbox-circle'
                            w={16}
                            h={16}
                            customStyles={
                                {
                                    marginRight: 4,
                                    fill: '#D80027'
                                }
                            }
                        />
                        <span>
                            {errors.password}
                        </span>
                    </div> :
                    null
                }
                {!errors.password && touched.password ?
                    <div
                        className={cn(
                            { successLabel: !errors.password && touched.password }
                        )}
                    >
                        <Icon
                            iconId='icon-checkbox-circle'
                            w={16}
                            h={16}
                            customStyles={
                                {
                                    marginRight: 4,
                                    fill: '#3CBF61'
                                }
                            }
                        />
                        <span>
                            {`Success password`}
                        </span>
                    </div> :
                    null
                }                
                <Button
                    type={'submit'}
                    label={'Sign In'}
                    customContainerStyles={{width: `fit-content`, marginTop: 14, marginBottom: 12}}
                />
                </Form>
                )}
                </Formik>
                <div className={cn('signin__container_link')}>
                    <span>Don't have an account? </span>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </div>
    </section>
    );
};

export { SignIn };