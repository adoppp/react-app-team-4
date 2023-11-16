import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { routes } from '../routes';
import { autheticatedSelector } from '../../storage/selectors/authSelectors';
import { refreshUser } from '../../storage/operations/authThunk';

const PrivateRoute = ({ children, redirectTo = routes.SIGNIN_ROUTE }) => {
    const [isLoading, setIsLoading] = useState(true);
    const authentificated = useSelector(autheticatedSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                await dispatch(refreshUser());
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        checkAuthentication();
    }, [dispatch]); 
    if (isLoading) {
        return null;
    }

    return authentificated ? children : <Navigate to={redirectTo} replace />;
}

export { PrivateRoute };
    


