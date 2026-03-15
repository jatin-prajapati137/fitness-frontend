// /**
//  * LAYOUT - Login ke baad har page ka wrapper
//  *
//  * Kaam:
//  * - Upar green header: "Fitness Tracker" (click pe /activities), "Logout" button
//  * - Neeche content (jo bhi page open ho - list ya detail) ek container me
//  */

// import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
// import { Link, useLocation } from 'react-router-dom'

// const Layout = ({ children, onLogout }) => {
//   const location = useLocation()
//   const isActivities = location.pathname.startsWith('/activities')

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
//       {/* Upar wala green bar */}
//       <AppBar position="static" elevation={0} sx={{ bgcolor: 'primary.main' }}>
//         <Toolbar>
//           <Typography
//             component={Link}
//             to="/activities"
//             variant="h6"
//             sx={{ flexGrow: 1, fontWeight: 700, color: 'white', textDecoration: 'none' }}
//           >
//             Fitness Tracker
//           </Typography>
//           {isActivities && (
//             <Button component={Link} to="/activities" sx={{ color: 'white', mr: 1 }}>
//               Activities
//             </Button>
//           )}
//           <Button
//             onClick={onLogout}
//             variant="outlined"
//             sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}
//           >
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>
//       {/* Neeche ka content - max width taaki zyada wide na ho */}
//       <Container maxWidth="md" sx={{ py: 3 }}>
//         {children}
//       </Container>
//     </Box>
//   )
// }

// export default Layout


import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children, onLogout }) => {
  const location = useLocation()
  const isActivities = location.pathname.startsWith('/activities')

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'primary.main' }}>
        <Toolbar>
          <Typography
            component={Link}
            to="/activities"
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 700, color: 'white', textDecoration: 'none' }}
          >
            Fitness Tracker
          </Typography>
          {isActivities && (
            <Button component={Link} to="/activities" sx={{ color: 'white', mr: 1 }}>
              Activities
            </Button>
          )}
          <Button
            onClick={onLogout}
            variant="outlined"
            sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 3 }}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout

