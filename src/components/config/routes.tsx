import { ReactElement, lazy } from 'react';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
import { Welcome } from '../Welcome';

type Route = {
  path: string;
  element: ReactElement;
};

const routes = {
  MAIN_ROUTE: '/',
  WELCOME_ROUTE: '/welcome',
  SIGNUP_ROUTE: '/signup',
  SIGNIN_ROUTE: '/signin',
  PROFILE_ROUTE: '/profile',
  DIARY_ROUTE: '/diary',
  PRODUCTS_ROUTE: '/products',
  EXERCISES_ROUTE: '/exercises',
};


const appRoutes: Route[] = [
  {
    path: routes.MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: routes.WELCOME_ROUTE,
    element: (
      <MainPage>
        <Welcome />
      </MainPage>
    ),
  },
  //  {
  //   path: routes.SIGNUP_ROUTE,
  //   element: (
    //   <Home>
    //     <SignUp />
    //   </Home>
    // ),
  // },
  //   {
  //   path: routes.SIGNIN_ROUTE,
  //   element:    //   <Home>
    //     <SignIn />
    //   </Home>
    // ),
  // {
  //   path: routes.PROFILE_ROUTE,
  //   element: <ProfilePage />,
  // },
  //   {
  //   path: routes.DIARY_ROUTE,
  //   element: <DiaryPage />,
  // },
  //     {
  //   path: routes.PRODUCTS_ROUTE,
  //   element: <ProductsPage />,
  // },
  //   {
  //   path: routes.EXERCISES_ROUTE,
  //   element: <ExercisesPage />,
  // },
]

export default appRoutes;
