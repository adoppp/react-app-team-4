import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { routes } from '../routes';
import { userInfoSelector } from '../../storage/selectors/authSelectors';

const InfoRoute = ({ children, redirectTo = routes.PROFILE_ROUTE }) => {
    const isInfo = useSelector(userInfoSelector);

    const isInfoInStore = Object.keys(isInfo).length !== 0;

    return isInfoInStore ? children : <Navigate to={redirectTo} replace />;
};

export { InfoRoute };
