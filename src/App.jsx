
import { Box } from '@mui/material'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from 'react-oauth2-code-pkce'
import { useDispatch } from 'react-redux'
import { setCredentials } from './store/authSlice'
import Layout from './components/Layout'
import LoginPage from './components/LoginPage'
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'
import ActivityDetail from './components/ActivityDetail'

const ActivitiesPage = () => (
  <Box>
    <ActivityForm onActivitiesAdded={() => window.location.reload()} />
    <ActivityList />
  </Box>
)

function App() {
  const { token, tokenData, login, logout } = useContext(AuthContext)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token, user: tokenData }))
    }
  }, [token, tokenData, dispatch])

  return (
    <Router>
      {!token ? (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <Routes>
            <Route path='/' element={<LoginPage onLogin={login} />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Box>
      ) : (
        <Layout onLogout={logout}>
          <Routes>
            <Route path='/activities' element={<ActivitiesPage />} />
            <Route path='/activities/:id' element={<ActivityDetail />} />
            <Route path='/' element={<Navigate to='/activities' replace />} />
            <Route path='*' element={<Navigate to='/activities' replace />} />
          </Routes>
        </Layout>
      )}
    </Router>
  )
}

export default App