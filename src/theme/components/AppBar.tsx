import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

const AppBar: Components<Omit<Theme, 'components'>>['MuiAppBar'] = {
  defaultProps: {
    color: 'inherit',
  },
  styleOverrides: {
    root: {
      boxShadow: 'none',
    },
  },
};

export default AppBar;
