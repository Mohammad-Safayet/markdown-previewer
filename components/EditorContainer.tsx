import React, { useContext } from 'react'

import TextField from '@material-ui/core/TextField';

import CustomContainer from './CustomContainer';
import useEditorStyles from '../hooks/styles/useEditor';
import markdownContext from '../hooks/states/markdownContext';

const EditorContainer = () => {
    const classes = useEditorStyles()

    const { setMarkdownText } = useContext(markdownContext)
    
    return (
        <CustomContainer
            title={'Editor'}
        >
            <TextField
                id="markdown-editor"
                label="Markdown Editor"
                multiline
                fullWidth
                variant="outlined"
                rows={42}
                color='secondary'
                inputProps={{
                    className: classes.inputStyle
                }}
                InputLabelProps={{
                    className: classes.inputLabelStyle
                }}
                onChange={e => setMarkdownText(e.currentTarget.value)}
            />
        </CustomContainer>
    );
}

export default EditorContainer
