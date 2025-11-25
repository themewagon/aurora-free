import { useMemo } from 'react';
import { Divider, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { useSettingsContext } from 'providers/SettingsProvider';
import sitemap from 'routes/sitemap';
import IconifyIcon from 'components/base/IconifyIcon';
import Logo from 'components/common/Logo';
import PromoCard from 'components/common/PromoCard';
import NavItem from './NavItem';
import SidenavSimpleBar from './SidenavSimpleBar';
import promo from '/assets/images/illustrations/5.webp';

interface SidenavDrawerContentProps {
  variant?: 'permanent' | 'temporary';
}

const SidenavDrawerContent = ({ variant = 'permanent' }: SidenavDrawerContentProps) => {
  const {
    config: { sidenavCollapsed, openNavbarDrawer },
    setConfig,
  } = useSettingsContext();

  const expanded = useMemo(
    () => variant === 'temporary' || (variant === 'permanent' && !sidenavCollapsed),
    [sidenavCollapsed],
  );

  const toggleNavbarDrawer = () => {
    setConfig({
      openNavbarDrawer: !openNavbarDrawer,
    });
  };

  return (
    <>
      <Toolbar variant="appbar" sx={{ display: 'block', px: { xs: 0 } }}>
        <Box
          sx={[
            {
              height: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            !expanded && {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            expanded && {
              pl: { xs: 4, md: 6 },
              pr: { xs: 2, md: 3 },
            },
          ]}
        >
          <Logo showName={expanded} />
          <IconButton sx={{ mt: 1, display: { md: 'none' } }} onClick={toggleNavbarDrawer}>
            <IconifyIcon icon="material-symbols:left-panel-close-outline" fontSize={20} />
          </IconButton>
        </Box>
      </Toolbar>
      <Box sx={{ flex: 1, overflow: 'hidden' }}>
        <SidenavSimpleBar>
          <Box
            sx={[
              {
                py: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              },
              !expanded && {
                px: 2,
              },
              expanded && {
                px: { xs: 2, md: 4 },
              },
            ]}
          >
            <div>
              {sitemap.map((menu) => (
                <Box key={menu.id}>
                  {menu.subheader === 'Docs' && !sidenavCollapsed && (
                    <>
                      <Divider sx={{ mb: 4 }} />
                    </>
                  )}
                  <List
                    dense
                    key={menu.id}
                    sx={{
                      mb: 3,
                      pb: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                    }}
                  >
                    {menu.items.map((item) => (
                      <NavItem key={item.pathName} item={item} level={0} />
                    ))}
                  </List>
                </Box>
              ))}
            </div>
            {!sidenavCollapsed && <PromoCard img={promo} imgStyles={{ maxWidth: 136 }} />}
          </Box>
        </SidenavSimpleBar>
      </Box>
    </>
  );
};

export default SidenavDrawerContent;
