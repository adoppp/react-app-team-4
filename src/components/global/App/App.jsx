import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './App.module.scss';
import { Loader } from '../../ui/Loader';
import NotFound from '../../pages/NotFound/NotFound';
import appRoutes from '../../../routing/routes';
import { refreshUser } from '../../../storage/operations/authThunk';
import {
    errorSelector,
    tokenSelector,
} from '../../../storage/selectors/authSelectors';
import { Modal } from '../../ui/Modal';
import NotFoundContainer from '../../containers/NotFoundContainer/NotFoundContainer';

const cn = classNames.bind(styles);

function App() {
    const token = useSelector(tokenSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;
        dispatch(refreshUser());
    }, [dispatch, token]);

    return (
        <main>
            <Suspense
                fallback={
                    <Loader />
                }
            >
                <Routes>
                    {appRoutes.map(({ path, element, children }) => (
                        <Route key={path} path={path} element={element}>
                            {children &&
                                children.map(({ path, element }) => (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={element}
                                    />
                                ))}
                        </Route>
                    ))}
                    <Route path="*" element={
                        <NotFoundContainer>
                            <NotFound />
                        </NotFoundContainer>
                    } />
                </Routes>
            </Suspense>
            {error && (
                <Modal error="error">
                    <span className={cn('error__text')}>{error}</span>
                </Modal>
            )}
        </main>
    );
}

export { App };
