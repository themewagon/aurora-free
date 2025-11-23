import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

declare module '@mui/material' {
  interface FormControlPropsSizeOverrides {
    large: true;
  }
}

const FormControl: Components<Omit<Theme, 'components'>>['MuiFormControl'] = {
  defaultProps: {
    variant: 'filled',
  },
};

export default FormControl;
