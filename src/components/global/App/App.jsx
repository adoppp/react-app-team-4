import { Suspense, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { Loader } from '../../ui/Loader';
import NotFound from '../../pages/NotFound/NotFound';
import appRoutes from '../../../routing/routes';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../../storage/operations/authThunk';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    });
    
    return (
        <div>
            <ul>
                <li>
                    <Link to="/welcome">welcome</Link>
                </li>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
                <li>
                    <Link to="/diary">diary</Link>
                </li>
                <li>
                    <Link to="/products">products</Link>
                </li>
                <li>
                    <Link to="/exercises">exercises</Link>
                </li>
                <li>
                    <Link></Link>
                </li>
            </ul>
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
                        {appRoutes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
}

export { App };
