import {createMuiTheme} from '@material-ui/core';
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#07273b',
        },
        primary: {
            main: '#df769b'
        },
        secondary: {
            main: '#49e9a6'
        },
        text: {
            primary: '#ffffff',
            secondary: '#e4b781',
        },
    }
});

export default theme;
