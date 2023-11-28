import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { routes } from '../routes';
import { authenticatedSelector } from '../../storage/selectors/authSelectors';

const PrivateRoute = ({ children, redirectTo = routes.SIGNIN_ROUTE }) => {
    const authentificated = useSelector(authenticatedSelector);

    return authentificated ? children : <Navigate to={redirectTo} replace />;
};

export { PrivateRoute };
