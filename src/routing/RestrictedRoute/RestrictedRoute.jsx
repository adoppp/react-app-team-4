import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { routes } from '../routes';
import {
    authenticatedSelector,
    userInfoSelector,
} from '../../storage/selectors/authSelectors';

const RestrictedRoute = ({ children, redirectTo = routes.PROFILE_ROUTE }) => {
    const authenticated = useSelector(authenticatedSelector);
    const userData = useSelector(userInfoSelector);

    const targetRoute = authenticated
        ? userData
            ? routes.DIARY_ROUTE
            : routes.PROFILE_ROUTE
        : null;

    return targetRoute ? <Navigate to={targetRoute} replace /> : children;
};

export { RestrictedRoute };
