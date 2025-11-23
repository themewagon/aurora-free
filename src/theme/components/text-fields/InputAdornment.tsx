import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
  styleOverrides: {
    root: {
      marginTop: '0 !important',
      justifyContent: 'center',
      fontSize: 20,
      [`&.MuiInputAdornment-sizeSmall`]: {
        fontSize: 16,
      },
      [`&.MuiInputAdornment-sizeLarge`]: {
        fontSize: 24,
      },
    },
  },
};

export default InputAdornment;
