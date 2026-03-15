import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import { AuthProvider } from 'react-oauth2-code-pkce'
import { authConfig } from './authConfig'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AuthProvider
      authConfig={authConfig}
      loadingComponent={
        <div style={{ padding: 40, textAlign: 'center', fontFamily: 'sans-serif' }}>
          Loading...
        </div>
      }
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
)