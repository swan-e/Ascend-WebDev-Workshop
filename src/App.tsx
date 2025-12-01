  import { HashRouter, Route, Routes } from 'react-router-dom';
  import './App.css';
  import Layout from "./pages/Layout.tsx";
  import ProfilePage from "./pages/ProfilePage.tsx";
  import ResumePage from "./pages/ResumePage.tsx";
  import PortfolioPage from "./pages/portfolioPage/PortfolioPage.tsx";
  import { ThemeProvider } from '@mui/material/styles';
  import { CssBaseline, Box } from '@mui/material';
  import theme from './theme.ts';


  function App() {
    return (
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ backgroundColor: '#FEF7FF', minHeight: '100vh' }}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<ProfilePage />} />
                <Route path="/about" element={<ProfilePage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
              </Route>
            </Routes>
          </Box>
        </ThemeProvider>
      </HashRouter>
    );
  }

  export default App;
