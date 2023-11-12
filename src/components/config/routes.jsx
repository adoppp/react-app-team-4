import { lazy } from 'react';
import { PrivateRoute } from '../global/PrivateRoute';
import { RestrictedRoute } from '../global/RestrictedRoute';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() =>
    import('../pages/ExercisesPage/ExercisesPage'),
);

import { Welcome } from '../Welcome';
import { SignUp } from '../SignUp';
import { SignIn } from '../SignIn';

export const routes = {
    MAIN_ROUTE: '/',
    WELCOME_ROUTE: '/welcome',
    SIGNUP_ROUTE: '/signup',
    SIGNIN_ROUTE: '/signin',
    PROFILE_ROUTE: '/profile',
    DIARY_ROUTE: '/diary',
    PRODUCTS_ROUTE: '/products',
    EXERCISES_ROUTE: '/exercises',
};

const appRoutes = [
    {
        path: routes.MAIN_ROUTE,
        element: <MainPage />,
    },
    {
        path: routes.WELCOME_ROUTE,
        element: (
            <RestrictedRoute>
             <MainPage>
                <Welcome />
            </MainPage>
            </RestrictedRoute>

        ),
    },
    {
        path: routes.SIGNUP_ROUTE,
        element: (
            <RestrictedRoute>
            <MainPage>
                <SignUp />
            </MainPage>
            </RestrictedRoute>

        ),
    },
    {
        path: routes.SIGNIN_ROUTE,
        element: (
            <RestrictedRoute>
            <MainPage>
                <SignIn />
            </MainPage>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.PROFILE_ROUTE,
        element: <PrivateRoute><ProfilePage /></PrivateRoute>,
    },
    {
        path: routes.DIARY_ROUTE,
        element: <PrivateRoute><DiaryPage /></PrivateRoute>,
    },
    {
        path: routes.PRODUCTS_ROUTE,
        element: <PrivateRoute><ProductsPage /></PrivateRoute>,
    },
    {
        path: routes.EXERCISES_ROUTE,
        element: <PrivateRoute><ExercisesPage /></PrivateRoute>,
        //import components and pass them here
    //     children: [
    //     {
    //         path: 'bodyparts',
    //         element: <PrivateRoute><BodyParts /></PrivateRoute>,
    //     },
    //     {
    //         path: 'muscles',
    //         element: <PrivateRoute><Muscles /></PrivateRoute>,
    //     },
    //     {
    //         path: 'equipment',
    //         element: <PrivateRoute><Equipment /></PrivateRoute>,
    //     },
    // ],
    },
];

export default appRoutes;
