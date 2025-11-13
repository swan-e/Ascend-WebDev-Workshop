  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import './App.css';
  import Layout from "./pages/Layout.js";
  import ProfilePage from "./pages/profilePage/ProfilePage.js";
  import ResumePage from "./pages/ResumePage.js";
  import PortfolioPage from "./pages/PortfolioPage.js";
  import AboutPage from "./pages/AboutPage.js";
  import { ThemeProvider } from '@mui/material/styles';
  import theme from './theme.js';


  function App() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ProfilePage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    );
  }

  export default App;
