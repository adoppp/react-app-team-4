import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';

import styles from './SignIn.module.scss';
import { Icon } from '../../ui/Icon';
import { Button } from '../../ui/Button/Button';
import { Title } from '../../global/Title';
import { login } from '../../../storage/operations/authThunk';

const cn = classNames.bind(styles);

const SignIn = () => {
    const [iconName, setIconName] = useState('icon-eye-off');
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();

    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const titleStyles = isLargeScreen
        ? { marginBottom: 16 }
        : { marginBottom: 14 };

    const buttonStyles = isLargeScreen ? 50 : 14;

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .matches(emailPattern)
            .required('The email field is required'),
        password: Yup.string()
            .min(6, 'The password field must contain at least 6 characters')
            .required('The password field is required'),
    });

    const handleIconChange = () => {
        setIconName(showPassword ? 'icon-eye-off' : 'icon-eye');
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        dispatch(login(e));
    };

    return (
        <section>
            <div className={cn('signin_container')}>
                <Title title="Sign In" customContainerStyles={titleStyles} />
                <p>
                    Welcome! Please enter your credentials to login to the
                    platform:
                </p>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, values }) => (
                        <Form className={cn('signin_form')}>
                            <Field
                                name="email"
                                type="email"
                                placeholder="email"
                                className={cn(
                                    'input',
                                    { error: errors.email && touched.email },
                                    { success: !errors.email && touched.email },
                                )}
                            />
                            {errors.email && touched.email ? (
                                <div
                                    className={cn({
                                        errorLabel:
                                            errors.email && touched.email,
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
                                    <span>{errors.email}</span>
                                </div>
                            ) : null}
                            {!errors.email && touched.email ? (
                                <div
                                    className={cn({
                                        successLabel:
                                            !errors.email && touched.email,
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
                                    <span>{`Success email`}</span>
                                </div>
                            ) : null}
                            <div style={{ position: 'relative' }}>
                                <Field
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
                                    className={cn(
                                        'input',
                                        {
                                            error:
                                                errors.password &&
                                                touched.password,
                                        },
                                        {
                                            success:
                                                !errors.password &&
                                                touched.password,
                                        },
                                    )}
                                />
                                {values.password.length > 0 ? (
                                    <Icon
                                        iconId={iconName}
                                        w={20}
                                        h={20}
                                        stylesName={cn('signup__eye')}
                                        action={handleIconChange}
                                    />
                                ) : null}
                                {errors.password && touched.password ? (
                                    <div
                                        className={cn({
                                            errorLabel:
                                                errors.password &&
                                                touched.password,
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
                                        <span>{errors.password}</span>
                                    </div>
                                ) : null}
                                {!errors.password && touched.password ? (
                                    <div
                                        className={cn({
                                            successLabel:
                                                !errors.password &&
                                                touched.password,
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
                                        <span>{`Success password`}</span>
                                    </div>
                                ) : null}
                            </div>
                            <Button
                                type={'submit'}
                                label={'Sign In'}
                                customContainerStyles={{
                                    width: `fit-content`,
                                    marginTop: buttonStyles,
                                    marginBottom: 12,
                                }}
                            />
                        </Form>
                    )}
                </Formik>
                <div className={cn('signin__container_link')}>
                    <span>Don&#39;t have an account? </span>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </section>
    );
};

export { SignIn };
