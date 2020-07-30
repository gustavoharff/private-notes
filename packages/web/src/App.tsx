import React from 'react'
import reactDOM from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'

import Home from './pages/Home'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  )
}

reactDOM.render(<App />, mainElement)
