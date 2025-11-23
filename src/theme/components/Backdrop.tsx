import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';
import { cssVarRgba } from 'lib/utils';

const Backdrop: Components<Omit<Theme, 'components'>>['MuiBackdrop'] = {
  styleOverrides: {
    invisible: {
      backgroundColor: 'transparent',
      backdropFilter: 'none',
    },
    root: ({ theme, ownerState }) => {
      if (ownerState.invisible) {
        return {};
      }
      return {
        backgroundColor: cssVarRgba(theme.vars.palette.grey['950Channel'], 0.3),
        ...theme.applyStyles('dark', {
          backgroundColor: cssVarRgba(theme.vars.palette.grey['950Channel'], 0.5),
        }),
      };
    },
  },
};

export default Backdrop;
