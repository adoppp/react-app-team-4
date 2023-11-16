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
    errorUserSelector,
    tokenSelector,
} from '../../../storage/selectors/authSelectors';
import { Modal } from '../../ui/Modal';

const cn = classNames.bind(styles);

function App() {
    const token = useSelector(tokenSelector);
    const error = useSelector(errorUserSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;
        dispatch(refreshUser());
    }, [dispatch, token]);

    return (
        <main>
            <Suspense
                fallback={
                    <Loader
                        customStyles={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                            margin: '0 auto',
                        }}
                    />
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
                    <Route path="*" element={<NotFound />} />
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
