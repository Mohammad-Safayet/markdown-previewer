import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { red } from "@material-ui/core/colors";

const useCustomTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#00FF41',
        },
        secondary: {
            main: '#008F11',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#0D0208', 
            paper: '#0D0208'
        },
        text: {
            primary: '#00FF41',
            secondary: '#008F11',
        },
        divider: '#003B00',
    },
    typography: {
        fontFamily: [
            'Jura', 
            'Ubuntu', 
            '"sans - serif"',
        ].join(','),
    },
    overrides: {
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: '#003B00',
            }
        }
    }
});

export default useCustomTheme