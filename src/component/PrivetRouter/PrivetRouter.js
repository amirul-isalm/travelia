import React from 'react';
import Loader from 'react-loader-spinner';
import { Redirect, Route } from 'react-router';
import useAuth from '../Context/useAuth';

const PrivetRouter = ({ children, ...rest }) => {
     const { user, isLoading } = useAuth();

     if (isLoading) {
       return (
         <div style={{ marginTop:"150px"}}>
           <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
         </div>
       );
     }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
};

export default PrivetRouter;