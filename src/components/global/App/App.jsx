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
    authenticatedSelector as authenticatedSelector,
    errorVerifySelector,
    isErrorVerifySelector,
    tokenSelector,
    userVerifySelector,
} from '../../../storage/selectors/authSelectors';
import {
    errorSelector,
    loadingSelector,
} from '../../../storage/selectors/globalSelectors';
import { Modal } from '../../ui/Modal';
import NotFoundContainer from '../../containers/NotFoundContainer/NotFoundContainer';
import { Notify } from 'notiflix';

const cn = classNames.bind(styles);

function App() {
    const token = useSelector(tokenSelector);
    const authenticated = useSelector(authenticatedSelector);
    const error = useSelector(errorSelector);
    const isLoading = useSelector(loadingSelector);
    const notifyErrorVerify = useSelector(errorVerifySelector);
    const isError = useSelector(isErrorVerifySelector);
    const verify = useSelector(userVerifySelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;
        else if (verify === false) return;

        dispatch(refreshUser());
    }, [dispatch, token, authenticated, verify]);

    Notify.init({
        position: 'center-top',
        success: {
            background: '#3cbf61',
            textColor: '#303030',
            notiflixIconColor: '#303030',
            backOverlayColor: '#e6533c',
        },
    });

    return (
        <main>
            <Suspense fallback={<Loader />}>
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
                    <Route
                        path="*"
                        element={
                            <NotFoundContainer>
                                <NotFound />
                            </NotFoundContainer>
                        }
                    />
                </Routes>
            </Suspense>
            {error && (
                <Modal error="error">
                    <span className={cn('error__text')}>{error}</span>
                </Modal>
            )}
            {isLoading && <Loader />}
            {notifyErrorVerify && (
                <div>
                    {isError
                        ? Notify.failure(`${notifyErrorVerify}`)
                        : Notify.success(`${notifyErrorVerify}`)}
                </div>
            )}
        </main>
    );
}

export { App };
