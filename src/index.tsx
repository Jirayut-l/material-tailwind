import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import theme from './assets/common/theme'
import AdminLayout from './layouts/Admin';
import AuthLayout from './layouts/Auth';


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={() => <AdminLayout/>}/>
                <Route path="/auth" render={() => <AuthLayout/>}/>
                <Redirect from="/" to="/admin/index"/>
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
