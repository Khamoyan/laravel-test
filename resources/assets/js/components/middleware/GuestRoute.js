import React from 'react';
import { Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => (
  <Route
    {...rest}
    render = { props =>
        !isLogged ? (
            <Component {...props} {...rest}/>
      ) : (
        <Redirect  to='/home' />
      )
    }
  />
);

export default PrivateRoute;