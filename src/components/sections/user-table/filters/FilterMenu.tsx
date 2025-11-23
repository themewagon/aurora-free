import { MouseEvent, useState } from 'react';
import { Button, Menu, MenuItem, menuClasses } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

interface FilterMenuProps {
  label: string;
  field: string;
  handleFilter: (field?: string, value?: string | number | Date, operator?: string) => void;
  menuItems: string[];
}

const FilterMenu = ({ label, field, handleFilter, menuItems }: FilterMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (filterBy: string) => {
    if (filterBy === 'All') {
      handleFilter();
    } else {
      handleFilter(field, filterBy);
    }
    handleMenuClose();
  };

  return (
    <div>
      <Button
        id={`${field}-filter-button`}
        aria-controls={open ? `product-${field}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        color="neutral"
        fullWidth
        sx={{ whiteSpace: 'nowrap', p: 1 }}
        disableElevation
        onClick={handleMenuOpen}
        endIcon={
          <IconifyIcon icon="material-symbols:expand-more-rounded" fontSize="20px !important" />
        }
      >
        {label}
      </Button>
      <Menu
        id={`product-${field}-menu`}
        slotProps={{
          list: {
            'aria-labelledby': `${field}-filter-button`,
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${menuClasses.paper}`]: {
            minWidth: 140,
          },
        }}
      >
        <MenuItem disableRipple onClick={() => handleMenuItemClick('All')}>
          All
        </MenuItem>
        {menuItems.map((item) => (
          <MenuItem
            key={item}
            sx={{ textTransform: 'capitalize' }}
            onClick={() => handleMenuItemClick(item)}
            disableRipple
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FilterMenu;
