import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { routes } from '../routes';
import { autheticatedSelector } from '../../storage/selectors/authSelectors';

const PrivateRoute = ({ children, redirectTo = routes.SIGNIN_ROUTE }) => {
    const authentificated = useSelector(autheticatedSelector);

    return authentificated ? children : <Navigate to={redirectTo} replace />;
}

export { PrivateRoute };