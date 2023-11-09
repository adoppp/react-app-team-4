import { Header } from '../global/Header';
// import { Button } from '../ui/Button';

import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../global/Loader';
import routes from '../config/routes';
import NotFound from '../pages/NotFound/NotFound';
import { Welcome } from '../global/Welcome';

const Home = lazy(() => import('../pages/Home/Home'));

const appRoutes = [
  {
    path: routes.HOME_ROUTE,
    element: <Home />,
  },
  {
    path: routes.WELCOME_ROUTE,
    element: (
      <Home>
        <Welcome />
      </Home>
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

function App() {

  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />} >
          <Routes>
            {appRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      
{/* 
      <Button
        label="test"
        action={() => { console.log('click') }}
        customContainerStyles={{marginRight: '12px'}}
      />
      <Button
        label="test"
        action={() => { console.log('click') }}
        isGray={true}
      /> */}
    </div>
  );
};

export { App };