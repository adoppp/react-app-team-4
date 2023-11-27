import { ProductsFilters } from './ProductsFilters';
import { ProductsList } from './ProductsList';
import { Title } from '../../global/Title/Title';
import styles from './ProductsPage.module.scss';
import classNames from 'classnames/bind';
import { ProductsModal } from './ProductsModal';
import { Modal } from '../../ui/Modal';
import { useState } from 'react';

const cn = classNames.bind(styles);

const ProductsPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [productDetails, setProductDetails] = useState({});

    const titleProducts = {};

    const handleOpen = (name, cal, _id) => {
        setProductDetails({ name, cal, _id });

        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={cn('products__container')}>
            <div className={cn('products__page_container')}>
                <Title title="Products" customContainerStyles={titleProducts} />
                <ProductsFilters />
            </div>
            <ProductsList open={handleOpen} />
            {isOpen && (
                <Modal customClose={handleClose}>
                    <ProductsModal
                        close={handleClose}
                        product={productDetails}
                    />
                </Modal>
            )}
        </div>
    );
};

export default ProductsPage;
