import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SignUp.module.scss';
import {
    registration,
    verifyOneMore,
} from '../../../storage/operations/authThunk';
import { Button } from '../../ui/Button/Button';
import { Icon } from '../../ui/Icon';
import { Title } from '../../global/Title';
import { Modal } from '../../ui/Modal';
import {
    errorSelector,
    loadingSelector,
} from '../../../storage/selectors/globalSelectors';
import { userSelector } from '../../../storage/selectors/authSelectors';

const cn = classNames.bind(styles);

const SignUp = () => {
    const [iconName, setIconName] = useState('icon-eye-off');
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const isLoading = useSelector(loadingSelector);
    const userData = useSelector(userSelector);
    const error = useSelector(errorSelector);

    const dispatch = useDispatch();

    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const titleStyles = isLargeScreen
        ? { marginBottom: 16 }
        : { marginBottom: 14 };

    const buttonStyles = isLargeScreen ? 50 : 14;

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('The name field is required'),
        email: Yup.string()
            .matches(
                emailPattern,
                'The email should look like this: example@example.com',
            )
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
        setShowModal(true);
        dispatch(registration(e));
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleVerify = () => {
        dispatch(verifyOneMore({ email: userData.email }));
    };

    return (
        <section>
            <div className={cn('signup__container')}>
                <Title title="Sign Up" customContainerStyles={titleStyles} />
                <p>
                    Thank you for your interest in our platform. To complete the
                    registration process, please provide us with the following
                    information.
                </p>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, values }) => (
                        <Form className={cn('signup_form')}>
                            <Field
                                name="name"
                                type="name"
                                placeholder="name"
                                className={cn(
                                    'input',
                                    { error: errors.name && touched.name },
                                    { success: !errors.name && touched.name },
                                )}
                            />
                            {errors.name && touched.name ? (
                                <div
                                    className={cn({
                                        errorLabel: errors.name && touched.name,
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
                            ) : null}
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
                                label={'Sign Up'}
                                customContainerStyles={{
                                    width: `fit-content`,
                                    marginTop: buttonStyles,
                                    marginBottom: 12,
                                }}
                            />
                        </Form>
                    )}
                </Formik>
                <div className={cn('signup__container_link')}>
                    <span>Already have an account? </span>
                    <Link to="/signin">Sign In</Link>
                </div>
                {showModal && !isLoading && !error && (
                    <Modal customClose={handleClose}>
                        <div className={cn('verify')}>
                            <Icon
                                iconId="icon-email-v"
                                w={120}
                                h={120}
                                customStyles={{
                                    fill: '#e6533c',
                                    marginBottom: 32,
                                }}
                            />
                            <Title
                                title="Please verify your email"
                                customContainerStyles={{ marginBottom: 16 }}
                            />
                            <p>
                                You&#39;re almost there, We sent an email to
                                <span>{` ${userData.email} `}</span>
                            </p>
                            <p className={cn('verify__conditions')}>
                                Just click on the link in that email to complete
                                your signup. If you don&#39;t see it, you may
                                need to
                                <span>{' check your spam '}</span>
                                folder.
                            </p>
                            <p>Still can&#39;t find the email? No problem.</p>
                            <Button
                                label="Resend Verification Email"
                                customContainerStyles={{
                                    fontSize: 18,
                                    marginTop: 44,
                                    marginBottom: 16,
                                }}
                                action={handleVerify}
                            />
                        </div>
                    </Modal>
                )}
            </div>
        </section>
    );
};

export { SignUp };
