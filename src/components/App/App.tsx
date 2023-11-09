import { Header } from '../global/Header';
// import { Button } from '../ui/Button';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../global/Loader';
import NotFound from '../pages/NotFound/NotFound';
import appRoutes from '../config/routes';




function App() {

  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />} >
          <Routes>
            {appRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      
{/* 
      <Button
        label='test'
        action={() => { console.log('click') }}
        customContainerStyles={{marginRight: '12px'}}
      />
      <Button
        label='test'
        action={() => { console.log('click') }}
        isGray={true}
      /> */}
    </div>
  );
};

export { App };