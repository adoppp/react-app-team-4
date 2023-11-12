import { routes } from '../../config/routes'
// import { useSelector } from react-redux';
import { Navigate } from 'react-router-dom';
// import { selectUserAuthentification } from 'redux/authReducer';

const PrivateRoute = ({ children, redirectTo = routes.SIGNIN_ROUTE }) => {
    // const authentificated = useSelector(selectUserAuthentification);

    //---------To test how it works------------------
    const authentificated = true;

    return authentificated ? children : <Navigate to={redirectTo} replace />;
}

export { PrivateRoute };
