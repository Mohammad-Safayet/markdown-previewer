import { createStyles, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const usePreviewStyles = makeStyles((_theme: Theme) =>
    createStyles({
        paper: {
            height: '835px',
            width: '100%',
            padding: '8px 16px',
            overflow: 'scroll',
        },
        text: {
            fontSize: "18px",
            fontFamily: "Ubuntu",
        },
    }),
)

export default usePreviewStyles