import React from 'react';
import {routes} from '../routes';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Box, Link,Typography, Theme} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const getRoutes = () => {
    return routes.map((prop, key) => {
        console.log(prop.layout + prop.path);
        if (prop.layout === '/admin') {
            return (
                <Route path={prop.layout + prop.path} component={prop.component} key={key}/>
            );
        } else {
            return null;
        }
    });
};
const useStyles = makeStyles((theme: Theme) => ({
    link: {
        alignSelf: 'flex-end',
        fontSize: '1.25rem',
        cursor: 'pointer',
        padding: theme.spacing(1),
        transition: 'color .4s ease-out',
        '&.active': {
            color: theme.palette.primary.main,
        },
    }
}));
const CreateLinks = () => {
    const  {link}= useStyles();
    return (
        <>
            {routes.map((props, key) => (
                <Typography className={link}>
                <Link href={props.layout + props.path}  key={key}>
                    {`.${props.name}`}
                </Link>
                </Typography>
            ))};
        </>
    )
};


const Admin = () => {

    return (
        <>
            <CreateLinks/>
            <h3>Admin Page </h3>
            <Box position="relative">
                <Switch>
                    {getRoutes()}
                    <Redirect from="*" to="/admin/index"/>
                </Switch>
            </Box>
        </>
    );
}
export default Admin;
