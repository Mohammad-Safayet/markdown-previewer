import { createStyles, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useEditorStyles = makeStyles((theme: Theme) =>
    createStyles({
        inputStyle: {
            fontSize: "18px",
            fontFamily: "Ubuntu",
        },
        inputLabelStyle: {
            fontSize: "18px",
            fontFamily: "Ubuntu",
            padding: "0 12px",
            background: theme.palette.background.default,
        },
    }),
)

export default useEditorStyles