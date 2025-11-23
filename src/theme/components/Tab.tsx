import { Theme, svgIconClasses } from '@mui/material';
import { Components } from '@mui/material/styles';

export const Tab: Components<Omit<Theme, 'components'>>['MuiTab'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      padding: '8px',
      minHeight: '36px',
      minWidth: '36px',
      [`.${svgIconClasses.root}`]: {
        fontSize: 20,
      },
    },
  },
};

export const Tabs: Components<Omit<Theme, 'components'>>['MuiTabs'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      minHeight: '36px',
    },
    list: {
      gap: '8px',
    },
  },
};
