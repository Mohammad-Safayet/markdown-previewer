import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useLandingStyles = makeStyles((_theme: Theme) =>
    createStyles({
        root: {
            height: '100vh', 
            width: '100%',
        },
        appbar: {
            margin: 0,
            padding: '8px 24px', 
        },
        row: {
            height: '950px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        horizontalDivider: {
            height: '80%',
            width: '2px',
            margin: 'auto',
        }
    }),
);

export default useLandingStyles