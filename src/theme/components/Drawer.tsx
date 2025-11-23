import { Theme, paperClasses } from '@mui/material';
import { Components } from '@mui/material/styles';

const Drawer: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
  defaultProps: {
    slotProps: {
      paper: {
        variant: 'elevation',
        elevation: 6,
      },
    },
  },
  styleOverrides: {
    docked: {
      [`& .${paperClasses.root}`]: {
        boxShadow: 'none',
      },
    },
  },
};

export default Drawer;
