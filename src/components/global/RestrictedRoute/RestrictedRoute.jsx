import { routes } from '../../config/routes'
// import { useSelector } from react-redux';
import { Navigate } from 'react-router-dom';
// import { selectUserAuthentification } from 'redux/authReducer';

const RestrictedRoute = ({ children, redirectTo = routes.PROFILE_ROUTE }) => {
    // const authentificated = useSelector(selectUserAuthentification);
    
    //---------To test how it works------------------
        const authentificated = false;

        return authentificated ? <Navigate to={redirectTo} replace /> : children;
}
export { RestrictedRoute };

