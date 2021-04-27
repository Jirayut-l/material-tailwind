import {createMuiTheme, PaletteType} from '@material-ui/core';

const theme = (mode:PaletteType)=>createMuiTheme({
    palette: {
        type:mode,
        primary: {
            main: '#df769b',
            dark:'#ffffff',
            light:'#000000'
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

export default theme('light');
