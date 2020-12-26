import React, { useState } from 'react'

import { CssBaseline } from '@material-ui/core'
import LandingPage from '../components/LandingPage'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import useCustomTheme from '../hooks/styles/useTheme'
import MarkdownContext from '../hooks/states/markdownContext'
import { globalContext } from '../interfaces'

const App = () => {
  const [markdownText, setMarkdownText] = useState("")

  const value: globalContext = {
    markdownText,
    setMarkdownText
  }

  return (
    <MarkdownContext.Provider value={value}>
    <React.Fragment>
      <ThemeProvider theme={useCustomTheme}>
        <CssBaseline />
        <LandingPage />
      </ThemeProvider>
    </React.Fragment>
   </MarkdownContext.Provider>
  )
}

export default App
