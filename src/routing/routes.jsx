import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const MainСontainer = lazy(() =>
    import('../components/containers/MainСontainer/MainСontainer'),
);
const PrivateContainer = lazy(() =>
    import('../components/containers/PrivateContainer/PrivateContainer'),
);
const ProfilePage = lazy(() =>
    import('../components/pages/ProfilePage/ProfilePage'),
);
const DiaryPage = lazy(() => import('../components/pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() =>
    import('../components/pages/ProductsPage/ProductsPage'),
);
const ExercisesPage = lazy(() =>
    import('../components/pages/ExercisesPage/ExercisesPage'),
);
const ProductsContainer = lazy(() =>
    import('../components/containers/ProductsContainer/ProductsContainer'),
);
const VerifyPage = lazy(() =>
    import('../components/pages/VerifyPage/VerifyPage'),
);

import { Welcome } from '../components/global/Welcome';
import { SignUp } from '../components/auth/SignUp';
import { SignIn } from '../components/auth/SignIn';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { InfoRoute } from './InfoRoute';
import { ExercisesSubcategoriesItem } from '../components/pages/ExercisesPage/ExercisesSubcategoriesItem';
import { ExercisesList } from '../components/pages/ExercisesPage/ExercisesList';
import { VerifyRoute } from './VerifyRoute';
import NotFoundContainer from '../components/containers/NotFoundContainer/NotFoundContainer';

const routes = {
    MAIN_ROUTE: '/',
    WELCOME_ROUTE: '/welcome',
    SIGNUP_ROUTE: '/signup',
    SIGNIN_ROUTE: '/signin',
    PROFILE_ROUTE: '/profile',
    DIARY_ROUTE: '/diary',
    PRODUCTS_ROUTE: '/products',
    EXERCISES_ROUTE: '/exercises',
    VERIFY_ROUTE: '/verify',
};

const appRoutes = [
    {
        path: routes.MAIN_ROUTE,
        element: (
            <RestrictedRoute>
                <Navigate to={routes.WELCOME_ROUTE} replace />
            </RestrictedRoute>
        ),
    },
    {
        path: routes.WELCOME_ROUTE,
        element: (
            <RestrictedRoute>
                <MainСontainer>
                    <Welcome />
                </MainСontainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.SIGNUP_ROUTE,
        element: (
            <MainСontainer>
                <SignUp />
            </MainСontainer>
        ),
    },
    {
        path: routes.SIGNIN_ROUTE,
        element: (
            <RestrictedRoute>
                <MainСontainer>
                    <SignIn />
                </MainСontainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.PROFILE_ROUTE,
        element: (
            <PrivateRoute>
                <PrivateContainer>
                    <ProfilePage />
                </PrivateContainer>
            </PrivateRoute>
        ),
    },
    {
        path: routes.DIARY_ROUTE,
        element: (
            <PrivateRoute>
                <InfoRoute>
                    <PrivateContainer>
                        <DiaryPage />
                    </PrivateContainer>
                </InfoRoute>
            </PrivateRoute>
        ),
    },
    {
        path: routes.PRODUCTS_ROUTE,
        element: (
            <PrivateRoute>
                <InfoRoute>
                    <ProductsContainer>
                        <ProductsPage />
                    </ProductsContainer>
                </InfoRoute>
            </PrivateRoute>
        ),
    },
    {
        path: routes.VERIFY_ROUTE,
        element: (
            <VerifyRoute>
                <NotFoundContainer>
                    <VerifyPage />
                </NotFoundContainer>
            </VerifyRoute>
        ),
    },
    {
        path: routes.EXERCISES_ROUTE,
        element: (
            <PrivateRoute>
                <InfoRoute>
                    <PrivateContainer>
                        <ExercisesPage />
                    </PrivateContainer>
                </InfoRoute>
            </PrivateRoute>
        ),
        children: [
            {
                path: '',
                element: (
                    <PrivateRoute>
                        <Navigate to={`${routes.EXERCISES_ROUTE}/body-parts`} />
                        <ExercisesPage />
                    </PrivateRoute>
                ),
            },
            {
                path: ':categories',
                element: <ExercisesSubcategoriesItem />,
            },
            {
                path: ':categories/:workout',
                element: <ExercisesList />,
            },
        ],
    },
];

export { routes };

export default appRoutes;
