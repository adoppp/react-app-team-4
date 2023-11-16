import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { routes } from '../routes'
import { autheticatedSelector } from '../../storage/selectors/authSelectors';


const RestrictedRoute = ({ children, redirectTo = routes.PROFILE_ROUTE }) => {
    const authentificated = useSelector(autheticatedSelector);

    return authentificated ? <Navigate to={redirectTo} replace /> : children;
}
export { RestrictedRoute };
