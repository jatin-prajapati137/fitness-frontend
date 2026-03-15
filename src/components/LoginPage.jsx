
import { Box, Button, Paper, Typography } from '@mui/material'

const LoginPage = ({ onLogin }) => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          maxWidth: 400,
          textAlign: 'center',
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: 2,
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
          }}
        >
          💪
        </Box>

        <Typography variant='h5' fontWeight={600} gutterBottom>
          Fitness Tracker
        </Typography>

        <Typography color='text.secondary' sx={{ mb: 3 }}>
          Log in to track your activities and get AI-powered recommendations.
        </Typography>

        <Button
          variant='contained'
          size='large'
          onClick={onLogin}
          sx={{ px: 4, py: 1.5 }}
        >
          Log in
        </Button>
      </Paper>
    </Box>
  )
}

export default LoginPage