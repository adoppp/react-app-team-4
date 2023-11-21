import React from 'react';
import { Calendar } from '../Calendar/Calendar';
import classNames from 'classnames/bind';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './UserForm.module.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../../storage/selectors/authSelectors';
import { infoUpdate } from '../../../storage/operations/authThunk';

const cn = classNames.bind(styles);

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    height: Yup.number().min(150).required(),
    currentWeight: Yup.number().min(35).required(),
    desiredWeight: Yup.number().min(35).required(),
    birthday: Yup.date()
        .required()
        .test('is-adult', function (value) {
            const today = new Date();
            const userBirthday = new Date(value);
            const age = today.getFullYear() - userBirthday.getFullYear();

            if (age < 18) {
                return this.createError({
                    message: 'Користувач повинен бути старше 18 років',
                });
            }

            return true;
        }),
    blood: Yup.number().oneOf([1, 2, 3, 4]).required(),
    sex: Yup.string().oneOf(['male', 'female']).required(),
    levelActivity: Yup.number().oneOf([1, 2, 3, 4, 5]).required(),
});

const UserForm = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const initialValues = {
        name: user.name,
        height: user.height,
        currentWeight: user.currentWeight,
        desiredWeight: user.desiredWeight,
        birthday: user.birthday,
        blood: user.blood,
        sex: user.sex,
        levelActivity: user.levelActivity,
    };

    const handleSubmit = (values) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        });
        const formattedDate = formatter.format(values.birthday);

        const updatedValues = { ...values, birthday: formattedDate };
        console.log(
            '🚀 ~ file: UserForm.jsx:53 ~ handleSubmit ~ values:',
            updatedValues,
        );

        console.log(updatedValues);

        dispatch(infoUpdate(updatedValues));
    };

    return (
        <div className={cn('UserFrom__container')}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, setFieldValue }) => (
                    <Form>
                        <div className={cn('basic__infoNameContainer')}>
                            <div className={cn('basic__infoName')}>
                                <label>Basic info</label>
                                <Field
                                    name="name"
                                    className={cn(
                                        'input',
                                        { error: errors.name && touched.name },
                                        {
                                            success:
                                                !errors.name && touched.name,
                                        },
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
                                ) : null}
                            </div>

                            <div className={cn('basic__infoMail')}>
                                <Field
                                    type="email"
                                    name="email"
                                    readOnly
                                    placeholder={`${user.email}`}
                                    className={cn('input', 'disabled')}
                                />
                            </div>
                        </div>

                        <div className={cn('basic__infoInputContainer')}>
                            <div className={cn('basic__info')}>
                                <label>Height</label>
                                <Field
                                    type="number"
                                    name="height"
                                    className={cn(
                                        'input',
                                        {
                                            error:
                                                errors.height && touched.height,
                                        },
                                        {
                                            success:
                                                !errors.height &&
                                                touched.height,
                                        },
                                    )}
                                />
                                {errors.height && touched.height ? (
                                    <div
                                        className={cn({
                                            errorLabel:
                                                errors.height && touched.height,
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
                                        <span>{errors.height}</span>
                                    </div>
                                ) : null}
                                {!errors.height && touched.height ? (
                                    <div
                                        className={cn({
                                            successLabel:
                                                !errors.height &&
                                                touched.height,
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
                                        <span>{`Success height`}</span>
                                    </div>
                                ) : null}
                            </div>

                            <div className={cn('basic__info')}>
                                <label>Current Weight</label>
                                <Field
                                    type="number"
                                    name="currentWeight"
                                    className={cn(
                                        'input',
                                        {
                                            error:
                                                errors.currentWeight &&
                                                touched.currentWeight,
                                        },
                                        {
                                            success:
                                                !errors.currentWeight &&
                                                touched.currentWeight,
                                        },
                                    )}
                                />
                                {errors.currentWeight &&
                                touched.currentWeight ? (
                                    <div
                                        className={cn({
                                            errorLabel:
                                                errors.currentWeight &&
                                                touched.currentWeight,
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
                                        <span>{errors.currentWeight}</span>
                                    </div>
                                ) : null}
                                {!errors.currentWeight &&
                                touched.currentWeight ? (
                                    <div
                                        className={cn({
                                            successLabel:
                                                !errors.currentWeight &&
                                                touched.currentWeight,
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
                                        <span>{`Success current weight`}</span>
                                    </div>
                                ) : null}
                            </div>

                            <div className={cn('basic__info')}>
                                <label>Desired Weight</label>
                                <Field
                                    type="number"
                                    name="desiredWeight"
                                    className={cn(
                                        'input',
                                        {
                                            error:
                                                errors.desiredWeight &&
                                                touched.desiredWeight,
                                        },
                                        {
                                            success:
                                                !errors.desiredWeight &&
                                                touched.desiredWeight,
                                        },
                                    )}
                                />
                                {errors.desiredWeight &&
                                touched.desiredWeight ? (
                                    <div
                                        className={cn({
                                            errorLabel:
                                                errors.desiredWeight &&
                                                touched.desiredWeight,
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
                                        <span>{errors.desiredWeight}</span>
                                    </div>
                                ) : null}
                                {!errors.desiredWeight &&
                                touched.desiredWeight ? (
                                    <div
                                        className={cn({
                                            successLabel:
                                                !errors.desiredWeight &&
                                                touched.desiredWeight,
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
                                        <span>{`Success desired weight`}</span>
                                    </div>
                                ) : null}
                            </div>

                            <div
                                className={`button-calendar btn-custom-class ${'your-custom-class'}`}
                            >
                                <Field
                                    type="date"
                                    name="birthday"
                                    className={`input bdInput ${'your-custom-class'}`}
                                    style={{
                                        marginBottom: 0,
                                        marginTop: 22,
                                    }}
                                    component={({ field, props }) => {
                                        return (
                                            <Calendar
                                                {...props}
                                                showNavigationButtons={false}
                                                buttonClass="your-button-class"
                                                initialDate={field?.value}
                                                onChange={(date) => {
                                                    setFieldValue(
                                                        'birthday',
                                                        date,
                                                    );
                                                }}
                                            />
                                        );
                                    }}
                                    initialDate={undefined}
                                    containerClass="your-custom-class"
                                />

                                {errors.birthday && (
                                    <span>{errors.birthday}</span>
                                )}
                            </div>
                        </div>
                        <div className={cn('blood__containerParent')}>
                            <div>
                                <label className={cn('label__blood')}>
                                    Blood
                                </label>
                                <div
                                    className={cn('blood__container')}
                                    style={{ marginBottom: 8 }}
                                >
                                    <label>
                                        <Field
                                            type="radio"
                                            id="blood1"
                                            name="blood"
                                            value="1"
                                            className={cn('radioBtn')}
                                        />
                                        <span
                                            className={cn('customRadioBtn')}
                                        ></span>
                                        <p className={cn('circle')}>1</p>
                                    </label>
                                    <label htmlFor="blood2">
                                        <Field
                                            type="radio"
                                            id="blood2"
                                            name="blood"
                                            value="2"
                                            className={cn('radioBtn')}
                                        />
                                        <span
                                            className={cn('customRadioBtn')}
                                        ></span>
                                        <p className={cn('circle')}>2</p>
                                    </label>
                                    <label htmlFor="blood3">
                                        <Field
                                            type="radio"
                                            id="blood3"
                                            name="blood"
                                            value="3"
                                            className={cn('radioBtn')}
                                        />
                                        <span
                                            className={cn('customRadioBtn')}
                                        ></span>
                                        <p className={cn('circle')}>3</p>
                                    </label>
                                    <label htmlFor="blood4">
                                        <Field
                                            type="radio"
                                            id="blood4"
                                            name="blood"
                                            value="4"
                                            className={cn('radioBtn')}
                                        />
                                        <span
                                            className={cn('customRadioBtn')}
                                        ></span>
                                        <p className={cn('circle')}>4</p>
                                    </label>
                                </div>
                                {errors.blood && touched.blood ? (
                                    <div
                                        className={cn({
                                            errorLabel:
                                                errors.blood && touched.blood,
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
                                        <span>{errors.blood}</span>
                                    </div>
                                ) : null}
                                {!errors.blood && touched.blood ? (
                                    <div
                                        className={cn({
                                            successLabel:
                                                !errors.blood && touched.blood,
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
                                        <span>{`Success blood`}</span>
                                    </div>
                                ) : null}
                            </div>

                            <div className={cn('sex__container')}>
                                <div className={cn('sex__wrapper')}>
                                    <div
                                        className={cn('sex__checkbox-wrapper')}
                                    >
                                        <label className={cn('sex__label')}>
                                            <Field
                                                type="radio"
                                                name="sex"
                                                value="male"
                                                className={cn('radioBtn')}
                                            />
                                            <span
                                                className={cn('customRadioBtn')}
                                            ></span>
                                            <p className={cn('circle')}>Male</p>
                                        </label>
                                        <label className={cn('sex__label')}>
                                            <Field
                                                type="radio"
                                                name="sex"
                                                value="female"
                                                className={cn('radioBtn')}
                                            />
                                            <span
                                                className={cn('customRadioBtn')}
                                            ></span>
                                            <p className={cn('circle')}>
                                                Female
                                            </p>
                                        </label>
                                    </div>
                                    {errors.sex && touched.sex ? (
                                        <div
                                            className={cn({
                                                errorLabel:
                                                    errors.sex && touched.sex,
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
                                            <span>{errors.sex}</span>
                                        </div>
                                    ) : null}
                                    {!errors.sex && touched.sex ? (
                                        <div
                                            className={cn({
                                                successLabel:
                                                    !errors.sex && touched.sex,
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
                                            <span>{`Success sex`}</span>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className={cn('levelActivity__container')}>
                            <label
                                className={cn('levelActivity__label')}
                                htmlFor="levelActivity1"
                            >
                                <Field
                                    type="radio"
                                    id="levelActivity1"
                                    name="levelActivity"
                                    value="1"
                                    className={cn('radioBtn')}
                                />
                                <span className={cn('customRadioBtn')}></span>
                                <p className={cn('circle')}>
                                    Sedentary lifestyle (little or no physical
                                    activity)
                                </p>
                            </label>
                            <label
                                className={cn('levelActivity__label')}
                                htmlFor="levelActivity2"
                            >
                                <Field
                                    type="radio"
                                    id="levelActivity2"
                                    name="levelActivity"
                                    value="2"
                                    className={cn('radioBtn')}
                                />
                                <span className={cn('customRadioBtn')}></span>
                                <p className={cn('circle')}>
                                    Light activity (light exercises/sports 1-3
                                    days per week)
                                </p>
                            </label>
                            <label
                                className={cn('levelActivity__label')}
                                htmlFor="levelActivity3"
                            >
                                <Field
                                    type="radio"
                                    id="levelActivity3"
                                    name="levelActivity"
                                    value="3"
                                    className={cn('radioBtn')}
                                />
                                <span className={cn('customRadioBtn')}></span>
                                <p className={cn('circle')}>
                                    Moderately active (moderate exercises/sports
                                    3-5 days per week)
                                </p>
                            </label>
                            <label
                                className={cn('levelActivity__label')}
                                htmlFor="levelActivity4"
                            >
                                <Field
                                    type="radio"
                                    id="levelActivity4"
                                    name="levelActivity"
                                    value="4"
                                    className={cn('radioBtn')}
                                />
                                <span className={cn('customRadioBtn')}></span>
                                <p className={cn('circle')}>
                                    Very active (intense exercises/sports 6-7
                                    days per week)
                                </p>
                            </label>
                            <label
                                className={cn('levelActivity__label')}
                                htmlFor="levelActivity5"
                            >
                                <Field
                                    type="radio"
                                    id="levelActivity5"
                                    name="levelActivity"
                                    value="5"
                                    className={cn('radioBtn')}
                                />
                                <span className={cn('customRadioBtn')}></span>
                                <p className={cn('circle')}>
                                    Extremely active (very strenuous
                                    exercises/sports and physical work)
                                </p>
                            </label>
                            {errors.levelActivity && touched.levelActivity ? (
                                <div
                                    className={cn({
                                        errorLabel:
                                            errors.levelActivity &&
                                            touched.levelActivity,
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
                                    <span>{errors.levelActivity}</span>
                                </div>
                            ) : null}
                            {!errors.levelActivity && touched.levelActivity ? (
                                <div
                                    className={cn({
                                        successLabel:
                                            !errors.levelActivity &&
                                            touched.levelActivity,
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
                                    <span>{`Success level activity`}</span>
                                </div>
                            ) : null}
                        </div>

                        <div>
                            <Button label="Save" type="submit" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export { UserForm };
