import { PropsWithChildren } from 'react';
import { Drawer, drawerClasses } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from 'layouts/main-layout/app-bar';
import Sidenav from 'layouts/main-layout/sidenav';
import { mainDrawerWidth } from 'lib/constants';
import { useSettingsContext } from 'providers/SettingsProvider';
import NavProvider from './NavProvider';
import Footer from './footer';
import SidenavDrawerContent from './sidenav/SidenavDrawerContent';

const MainLayout = ({ children }: PropsWithChildren) => {
  const {
    config: { drawerWidth, openNavbarDrawer },
    setConfig,
  } = useSettingsContext();

  const toggleNavbarDrawer = () => {
    setConfig({
      openNavbarDrawer: !openNavbarDrawer,
    });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', zIndex: 1, position: 'relative' }}>
        <NavProvider>
          <AppBar />

          <Sidenav />

          <Drawer
            variant="temporary"
            open={openNavbarDrawer}
            onClose={toggleNavbarDrawer}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              [`& .${drawerClasses.paper}`]: {
                pt: 3,
                boxSizing: 'border-box',
                width: mainDrawerWidth.full,
              },
            }}
          >
            <SidenavDrawerContent variant="temporary" />
          </Drawer>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 0,
              minHeight: '100vh',
              width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
              display: 'flex',
              flexDirection: 'column',
              ml: { md: `${mainDrawerWidth.collapsed}px`, lg: 0 },
            }}
          >
            <Toolbar variant="appbar" />

            <Box sx={{ flex: 1 }}>
              <Box
                sx={[
                  {
                    height: 1,
                    bgcolor: 'background.default',
                  },
                ]}
              >
                {children}
              </Box>
            </Box>
            <Footer />
          </Box>
        </NavProvider>
      </Box>
    </Box>
  );
};

export default MainLayout;
