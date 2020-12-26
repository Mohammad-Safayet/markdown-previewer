import React, { useContext } from 'react'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import CustomContainer from './CustomContainer';
import ReactMarkdown from 'react-markdown';

import usePreviewStyles from '../hooks/styles/usePreview';
import markdownContext from '../hooks/states/markdownContext';

const PreviewContainer = () => {
    const classes = usePreviewStyles()

    const { markdownText } = useContext(markdownContext)

    return (
        <CustomContainer
            title={'Preview'}
        >
            <Paper
                elevation={0}
                variant="outlined"
                className={classes.paper}
            >
                <Typography
                    paragraph
                    className={classes.text}
                >
                    <ReactMarkdown children={markdownText} />
                </Typography>
            </Paper>
        </CustomContainer>
    );
}

export default PreviewContainer
