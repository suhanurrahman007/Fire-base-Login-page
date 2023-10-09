import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRouter = ({children}) => {
    const { user, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <span className="loading loading-spinner loading-md"></span>;
    }
    if (user) {
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRouter;

PrivateRouter.propTypes = {
  children: PropTypes.node,
};