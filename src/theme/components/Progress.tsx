import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

export const LinearProgress: Components<Omit<Theme, 'components'>>['MuiLinearProgress'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      borderRadius: 2,
    },
    bar: {
      borderRadius: 2,
    },
  },
};

export const CircularProgress: Components<Omit<Theme, 'components'>>['MuiCircularProgress'] = {
  defaultProps: {},
  styleOverrides: {
    circle: {
      strokeLinecap: 'round',
    },
  },
};
