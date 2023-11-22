import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from '../../../../storage/operations/diaryThunk';
import styles from './ProductsModal.module.scss';
import { Button } from '../../../ui/Button';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { SuccessModal } from '../SuccessModal/SuccessModal';


const cn = classNames.bind(styles);

const ProductsModal = ({ close, product }) => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.diary.selectedDate);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
     const [calculatedCalories, setCalculatedCalories] = useState(0);
    
        const validationSchema = Yup.object({
        grams: Yup.number()
            .required('Grams is required')
            .positive('Grams must be a positive number')
            .integer('Grams must be an integer'),
        });
    
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
        height: isLargeScreen ? 52 : 42,
    };
    const initialValues = {
        grams: '',
    };

    const onSubmit = (values) => {
        const id = product._id;
        const date = selectedDate;
        

        dispatch(addProduct({
            id: id,
            date: date,
            weight: values.grams,
        })).then(() => {
            setShowSuccessModal(true); 
        })
        
    };
    const closeSuccessModal = () => {
        setShowSuccessModal(false);
        close(); 
    };


    return <>
    {!showSuccessModal ?
        <div className={cn('container')} >
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                {({ values, handleSubmit }) => {
                const calories = Math.round(((product.cal / 100) * values.grams) )
                    useEffect(() => {
                        setCalculatedCalories(calories);
                    }, [values.grams, product.cal]);

                    return (
                 <Form onSubmit={handleSubmit}> 
                        <div className={cn('product_modal')}>
                            <div className={cn('inputs')}>
                                <div className={cn('product')}>
                                    {product.name}
                                </div>
                                <div className={cn('input_container-grams')}>
                                    <Field
                                        type="text"
                                        id="grams"
                                        name="grams"
                                        className={cn('input-grams')}
                                    />
                                    <span className={cn('input__title')}>
                                        grams
                                    </span>
                                </div>
                            </div>
                            <p className={cn('title_calories')}>
                                Calories: {calculatedCalories}
                            </p>
                            <div className={cn('button_container')}>
                                <Button
                                    label="Add to diary"
                                    type="submit" 
                                    customContainerStyles={buttonStylesAdd}
                                />
                                <Button
                                    label="Cancel"
                                    action={close} 
                                    customContainerStyles={buttonStylesCancel}
                                    buttonStyles="gray"
                                />
                            </div>
                        </div>
                    </Form>
                )
                }}
            </Formik> 
        </div > :
        <SuccessModal onClose={closeSuccessModal} calories={calculatedCalories} />}
    </>
;
};
export { ProductsModal };
