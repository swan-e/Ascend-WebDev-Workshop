import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#6750A4' },
    secondary: { main: '#686868ff' },
    tertiary: {main: '#7D5260'}
  },
  typography: {
    h1: {
      fontSize: 'clamp(2rem, 4vw, 5rem)',
      fontWeight: 700,
    },
    h2: {
      fontSize: 'clamp(1rem, 3vw, 4rem)',
      fontWeight: 700,
    },
    h3: {
      fontSize: 'clamp(0.5rem, 2.5vw, 3.5rem)',
    },
    p: {
      fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
