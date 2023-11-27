import { Navigate } from "react-router-dom";

import {     
    SignIn,
    SignUp,
    Welcome,
    DiaryPage,
    InfoRoute,
    VerifyPage,
    ProfilePage,
    VerifyRoute,
    ProductsPage,
    PrivateRoute,
    ExercisesPage,
    ExercisesList,
    MainContainer,
    RestrictedRoute,
    PrivateContainer,
    ProductsContainer,
    NotFoundContainer, 
    ExercisesSubcategoriesItem
} from "./routesImport";

const routes = {
    MAIN_ROUTE: '/',
    DIARY_ROUTE: '/diary',
    SIGNIN_ROUTE: '/signin',
    SIGNUP_ROUTE: '/signup',
    VERIFY_ROUTE: '/verify',
    PROFILE_ROUTE: '/profile',
    WELCOME_ROUTE: '/welcome',
    PRODUCTS_ROUTE: '/products',
    EXERCISES_ROUTE: '/exercises',
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
                <MainContainer>
                    <Welcome />
                </MainContainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.SIGNUP_ROUTE,
        element: (
            <RestrictedRoute>
                <MainContainer>
                    <SignUp />
                </MainContainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.SIGNIN_ROUTE,
        element: (
            <RestrictedRoute>
                <MainContainer>
                    <SignIn />
                </MainContainer>
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
