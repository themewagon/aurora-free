import { JSX, MouseEvent, useState } from 'react';
import {
  Button,
  ButtonOwnProps,
  Menu,
  MenuItem,
  MenuItemProps,
  SxProps,
  listClasses,
  menuClasses,
} from '@mui/material';
import EllipsisHorizontalIcon from 'components/icons/EllipsisHorizontalIcon';

interface DashboardMenuProps {
  menuItems?: ({
    label: string;
  } & MenuItemProps)[];
  icon?: JSX.Element;
  size?: ButtonOwnProps['size'];
  variant?: ButtonOwnProps['variant'];
  sx?: SxProps;
}

const defaultItems: DashboardMenuProps['menuItems'] = [
  {
    label: 'Sync',
  },
  {
    label: 'Export',
  },
  {
    label: 'Remove',
    sx: { color: 'error.main' },
  },
];

const DashboardMenu = ({
  menuItems = defaultItems,
  icon = <EllipsisHorizontalIcon />,
  size = 'small',
  variant = 'text',
  sx,
}: DashboardMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{ color: 'text.primary', ...sx }}
        shape="square"
        color="neutral"
        size={size}
        variant={variant}
        aria-label="more"
        id="action-button"
        aria-controls={open ? 'actions-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {icon}
      </Button>

      <Menu
        id="actions-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          [`& .${menuClasses.paper}`]: {
            [`& .${listClasses.root}`]: {
              minWidth: 120,
            },
          },
        }}
        slotProps={{
          list: {
            'aria-labelledby': 'action-button',
          },
        }}
      >
        {menuItems.map(({ label, onClick, ...rest }) => (
          <MenuItem
            key={label}
            onClick={(e) => {
              if (onClick) {
                onClick(e);
              }
              handleClose(e);
            }}
            {...rest}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DashboardMenu;
