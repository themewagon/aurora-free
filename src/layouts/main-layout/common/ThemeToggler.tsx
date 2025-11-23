import { MouseEvent, SyntheticEvent, useCallback, useState } from 'react';
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Radio,
  SnackbarCloseReason,
  Typography,
  radioClasses,
} from '@mui/material';
import { presetOptions } from 'data/color-presets';
import IconifyIcon from 'components/base/IconifyIcon';
import ProSnackbar from './ProSnackbar';

const ThemeToggler = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleOpen = () => setOpen(true);
  const handleClose = (_event: SyntheticEvent, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };
  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  return (
    <>
      <Button color="neutral" variant="soft" shape="circle" onClick={handleMenuOpen}>
        <IconifyIcon icon="material-symbols-light:palette-outline" sx={{ fontSize: 22 }} />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            sx: {
              minWidth: 280,
            },
          },
        }}
      >
        {presetOptions.map((option, index) => {
          const isActive = option.value === 'default-light';
          const themeColors = [
            option.colors.primary,
            option.colors.success,
            option.colors.warning,
            option.colors.error,
            option.colors.secondary,
            option.colors.neutral,
          ];

          return (
            <MenuItem
              key={option.value}
              onClick={isActive ? handleMenuClose : handleOpen}
              selected={isActive}
              sx={{
                py: 0.5,
                px: 2,
              }}
            >
              <ListItemIcon sx={{ minWidth: 28 }}>
                <Radio
                  checked={index === 0}
                  value={option.value}
                  checkedIcon={
                    <IconifyIcon
                      fontSize={24}
                      icon="material-symbols-light:check-circle"
                      sx={{ color: 'primary.main', fontSize: '24px !important' }}
                    />
                  }
                  sx={{
                    p: 0,
                    ...(isActive && {
                      [`&.${radioClasses.root}`]: {
                        ml: -0.5,
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }),
                  }}
                />
              </ListItemIcon>

              <ListItemText>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'primary.main' : 'text.primary',
                  }}
                >
                  {option.label}
                </Typography>
              </ListItemText>
              <Box sx={{ display: 'flex', gap: 0.5, ml: 'auto' }}>
                {themeColors.map((color, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: color,
                      borderRadius: 0.5,
                    }}
                  />
                ))}
              </Box>
            </MenuItem>
          );
        })}
      </Menu>
      <ProSnackbar open={open} onClose={handleClose} />
    </>
  );
};

export default ThemeToggler;
