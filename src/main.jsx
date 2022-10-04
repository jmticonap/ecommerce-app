import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootswatch/dist/yeti/bootstrap.min.css"
import store from './store'
import { Provider } from 'react-redux'

import { ThemeProvider, createTheme } from '@mui/material/styles'

export const myTheme = createTheme({
  palette: {

    primary: {
      main: '#008cba',
    },
    secondary: {
      main: '#f50057',
    },
    hotpink: {
      main: 'hotpink',
      contrastText: '#FFF'
    },
    white: {
      main: 'rgba(255,255,255,1)',
      contrastText: '#FFF'
    }
  }
})

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={myTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  )
