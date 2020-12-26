import React from 'react'
import { globalContext } from '../../interfaces'

const globalDefaultContext : globalContext= {
    markdownText: "",
    setMarkdownText: () => {}
}

export default React.createContext(globalDefaultContext)