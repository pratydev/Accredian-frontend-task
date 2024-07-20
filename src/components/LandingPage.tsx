import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppAppBar from './mui-components/AppAppBar';
import Hero from './mui-components/Hero';
import Footer from './mui-components/Footer';






export default function LandingPage() {

  return (

    <>
      <CssBaseline />
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Footer />
      </Box>
    </>
  );
}