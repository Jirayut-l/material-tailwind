import React from 'react';
import {Route} from 'react-router-dom';
import {routes} from '../routes';

const Auth = () => {

    const getRoutes = () => {
        return routes.map((prop, key) => {
            if (prop.layout === '/auth') {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    return (
        <>
            <h3>Auth Page</h3>
        </>
    )
}
export default Auth;
