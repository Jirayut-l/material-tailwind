import hexToRgb from '../common/hex-to-rgb';
import themeColors from '../common/colors';
import {Theme} from '@material-ui/core';

const useStyle = ({
    palette: {
        buttonLightLabel: {
            main: 'rgba(' + hexToRgb(themeColors.white.main) + ', 0.95)',
        },
        sidebarLinks: {
            main: 'rgba(' + hexToRgb(themeColors.black.main) + ', 0.5)',
            dark: 'rgba(' + hexToRgb(themeColors.black.main) + ', 0.9)',
        },
        adminNavbarSearch: {
            main: 'rgba(' + hexToRgb(themeColors.white.main) + ', 0.6)',
        },
        authNavbarLink: {
            main: 'rgba(' + hexToRgb(themeColors.white.main) + ', 0.65)',
            dark: 'rgba(' + hexToRgb(themeColors.white.main) + ', 0.95)',
        }
    },
});

const componentStyles = (theme:Theme) => ({
    listRoot: {
        marginTop: '2rem',
        height: '100%',
    },
    listItemRoot: {
        display: 'flex',
        fontSize: '.9rem',
        color: 'ss',
        padding: '.65rem 1.5rem !important',
        '&:hover': {
            color: useStyle.palette.sidebarLinks.main,
        },
    },
    listItemRootUpgradeToPro: {
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            bottom: '10px',
        },
        '&,&:hover': {
            background: themeColors.gray[500] + '!important',
        },
        '&:before': {
            display: 'none',
        },
    },
    listItemSelected: {
        color: useStyle.palette.sidebarLinks.dark,
        '&$listItemRoot,&$listItemRoot:hover': {
            backgroundColor: 'unset',
        },
        '&:before': {
            top: '.25rem',
            bottom: '.25rem',
            left: 0,
            right: 'auto',
            borderLeft: '2px solid ' + theme.palette.primary.main,
            borderBottom: 0,
            content: '""',
            position: 'absolute',
        },
    },
    listItemIconRoot: {
        minWidth: '2.25rem',
        fontSize: '.9375rem',
        lineHeight: '1.5rem',
        display: 'inline-block',
        top: '2px',
    },
    divider: {
        marginBottom: '1rem',
        marginTop: '1rem',
        marginLeft: '1.5rem',
        marginRight: '1.5rem',
    },
    title: {
        paddingTop: '.25rem',
        paddingBottom: '.25rem',
        fontSize: '.75rem',
        textTransform: 'uppercase',
        letterSpacing: '.04em',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        color: theme.palette.grey[600],
    },
    logoClasses: {
        maxHeight: '2rem',
        maxWidth: '100%',
        verticalAlign: 'middle',
        borderStyle: 'none',
        [theme.breakpoints.up('md')]: {
            maxHeight: '2.5rem',
        },
    },
    logoLinkClasses: {
        fontSize: '1.25rem',
        lineHeight: 'inherit',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        display: 'block',
        textAlign: 'center',
    },
    textPrimary: {
        color: theme.palette.primary.main,
    },
    textPrimaryLight: {
        color: theme.palette.primary.light,
    },
    textError: {
        color: theme.palette.error.main,
    },
    textErrorLight: {
        color: theme.palette.error.light,
    },
    textWarning: {
        color: theme.palette.warning.main,
    },
    textWarningLight: {
        color: theme.palette.warning.light,
    },
    textInfo: {
        color: theme.palette.info.main,
    },
    textInfoLight: {
        color: theme.palette.info.light,
    },
    menuPaper: {
        width: 'calc(100% - 2rem)',
    },
    outlineNone: {
        outline: 'none!important',
    },
});

export default componentStyles;
