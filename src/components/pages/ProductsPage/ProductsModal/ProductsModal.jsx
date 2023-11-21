import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames/bind';
import styles from './ProductsModal.module.scss';
import { Button } from '../../../ui/Button';
import { useMediaQuery } from 'react-responsive';

const cn = classNames.bind(styles);

const ProductsModal = ({close}) => {
    const isLargeScreen = useMediaQuery({ minWidth: 768 });
    const buttonStylesAdd = {
        fontSize: 16,
        width: 151,
        height: isLargeScreen ? 52 : 42,
        padding: '12px 32px',
        color: 'rgba(239, 237, 232, 1)',
    };
    const buttonStylesCancel = {
        fontSize: isLargeScreen ? 20 : 16,
        width: isLargeScreen ? 142 : 121,
        padding: '12px 36px',
        border: '1px solid rgba(239, 237, 232, 0.3)',
        backgroundColor: 'transparent',
        height: isLargeScreen ? 52 : 42,
        color: 'rgba(239, 237, 232, 1)',
    };
    const initialValues = {
        grams: '',
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <div className={cn('product_modal')}>
                    <div className={cn('inputs')}>
                            <div className={cn('product')}>
                                dinamic product
                            </div>
                        <div className={cn('input_container-grams')}>
                            <Field
                                type='text'
                                id='grams'
                                name='grams'
                                className={cn('input-grams')}
                            />
                            <span className={cn('input__title')}>grams</span>
                        </div>
                    </div>
                    <p className={cn('title_calories')}>Calories:</p>
                    <div className={cn('button_container')}>
                        <Button
                            label='Add to diary'
                            action={() => {
                                console.log('click');
                            }}
                            customContainerStyles={buttonStylesAdd}
                        />
                        <Button
                            label='Cancel'
                            action={close}
                            customContainerStyles={buttonStylesCancel}
                        />
                    </div>
                </div>
            </Form>
        </Formik>
    );
};
export { ProductsModal };