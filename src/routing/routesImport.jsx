import { lazy } from 'react';

const MainContainer = lazy(() =>
    import('../components/containers/MainContainer/MainContainer'),
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

export {
    SignUp,
    SignIn,
    Welcome,
    InfoRoute,
    VerifyRoute,
    PrivateRoute,
    ExercisesList,
    RestrictedRoute,
    NotFoundContainer,
    ExercisesSubcategoriesItem,
    ProductsContainer,
    PrivateContainer,
    MainContainer,
    ExercisesPage,
    ProductsPage,
    ProfilePage,
    VerifyPage,
    DiaryPage,
};