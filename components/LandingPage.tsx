import React from 'react'

import useLandingStyles from '../hooks/styles/useLandingStyles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'

import EditorContainer from './EditorContainer'
import PreviewContainer from './PreviewContainer'

const LandingPage = () => {
    const classes = useLandingStyles()

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appbar} color='transparent'>
                    <Typography
                        variant="h2"
                        gutterBottom
                    >
                        Markdown Previewer
                    </Typography>
                </AppBar>
                <Paper elevation={0} square className={classes.row}>
                    <EditorContainer />
                    <Divider
                        flexItem
                        orientation="horizontal"
                        variant='fullWidth'
                        className={classes.horizontalDivider}
                    />
                    <PreviewContainer />
                </Paper>
            </div>
        </React.Fragment>
    )
}

export default LandingPage
