import { Theme, switchClasses } from '@mui/material';
import { Components } from '@mui/material/styles';

const Switch: Components<Omit<Theme, 'components'>>['MuiSwitch'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      [`& .${switchClasses.switchBase}`]: {
        padding: 0,
        margin: 2,
        [`&.${switchClasses.checked}`]: {
          transform: 'translateX(12px)',
        },
        [`&.${switchClasses.disabled}`]: {
          backgroundColor: 'transparent',
          boxShadow: theme.vars.shadows[2],
        },
      },
    }),
    sizeMedium: {
      height: 24,
      width: 36,
    },
    sizeSmall: {
      height: 20,
      width: 32,
    },
    thumb: ({ theme }) => ({
      boxShadow: 'none',
      backgroundColor: theme.vars.palette.background.elevation1,
    }),

    track: ({ theme }) => ({
      backgroundColor: theme.vars.palette.background.elevation4,
      opacity: '1 !important',
      borderRadius: 12,
    }),
  },
};

export default Switch;
