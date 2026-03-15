// /**
//  * THEME.JS - MUI ka color + style
//  * Primary = teal/green (#0d9488), background = light grey, buttons/cards rounded
//  */
// import { createTheme } from '@mui/material/styles'

// export const theme = createTheme({
//   palette: {
//     primary: { main: '#0d9488', light: '#14b8a6', dark: '#0f766e' },
//     secondary: { main: '#64748b' },
//     background: { default: '#f8fafc', paper: '#ffffff' },
//     success: { main: '#22c55e' },
//   },
//   typography: {
//     fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
//     h4: { fontWeight: 600 },
//     h5: { fontWeight: 600 },
//     h6: { fontWeight: 600 },
//   },
//   shape: { borderRadius: 12 },
//   components: {
//     MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 600 } } },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
//           '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
//         },
//       },
//     },
//   },
// })


import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#0d9488', light: '#14b8a6', dark: '#0f766e' },
    secondary: { main: '#64748b' },
    background: { default: '#f8fafc', paper: '#ffffff' },
    success: { main: '#22c55e' },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 600 } } },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
        },
      },
    },
  },
})






