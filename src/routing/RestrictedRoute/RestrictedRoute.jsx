import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { routes } from '../routes';
import { autheticatedSelector, } from '../../storage/selectors/authSelectors';

const RestrictedRoute = ({ children, redirectTo = routes.PROFILE_ROUTE }) => {
    const authentificated = useSelector(autheticatedSelector);
    ////////////////
    const hasProfileData = true;

     const targetRoute = authentificated ? (hasProfileData ? routes.DIARY_ROUTE : routes.PROFILE_ROUTE) : null;

    return targetRoute ? <Navigate to={targetRoute} replace /> : children;
};

export { RestrictedRoute };
