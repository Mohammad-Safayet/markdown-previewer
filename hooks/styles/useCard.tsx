import { createStyles, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '48%',
            height: '950px',
            padding: theme.spacing(2),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            backgroundColor: theme.palette.background.default
        },
        header: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
        title: {
            fontSize: 20,
            fontFamily: 'Jura',
            fontWeight: 600,
            padding: theme.spacing(1),
        },
        divider: {
            margin: theme.spacing(2),
            marginLeft: theme.spacing(5),
            marginRight: theme.spacing(5),
            height: '2px',
            width: '75%',
        },
    }),
)

export default useCardStyles