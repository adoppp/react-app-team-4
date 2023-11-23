import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { routes } from '../routes';
import { autheticatedSelector, userInfoSelector, userSelector, userVerifySelector} from '../../storage/selectors/authSelectors';

const VerifyRoute = ({ children, redirectTo = routes.PROFILE_ROUTE }) => {
    const verify = useSelector(userVerifySelector);
    console.log("🚀 ~ file: VerifyRoute.jsx:9 ~ VerifyRoute ~ verify:", verify)

    return verify ? <Navigate to={redirectTo} replace /> : children;
}

export { VerifyRoute };