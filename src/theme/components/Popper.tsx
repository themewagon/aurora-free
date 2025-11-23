import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

const Popper: Components<Omit<Theme, 'components'>>['MuiPopper'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      zIndex: theme.zIndex.tooltip,
    }),
  },
};

export default Popper;
