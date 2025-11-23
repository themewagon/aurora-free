import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

declare module '@mui/material/Toolbar' {
  interface ToolbarPropsVariantOverrides {
    appbar: true;
  }
}

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
  variants: [
    {
      props: { variant: 'appbar' },
      style: ({ theme }) => ({
        minHeight: 64,
        [theme.breakpoints.up('md')]: {
          minHeight: 82,
        },
      }),
    },
  ],
};

export default Toolbar;
