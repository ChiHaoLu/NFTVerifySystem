import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import ViewInArTwoToneIcon from '@mui/icons-material/ViewInArTwoTone';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Verify } from "./components/VerifySys";

function Copyright() {

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/mollyjn/">
        swfLAB - KilliMilli
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton sx={{ mr: 2 }} href="/" aria-label="home">
            <HomeIcon />
          </IconButton>
          <ViewInArTwoToneIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            NFT Verify System
          </Typography>
        </Toolbar>
      </AppBar>

      <Verify />

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Powered by Opensea-js!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}