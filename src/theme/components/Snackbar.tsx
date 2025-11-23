import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

export const SnackbarContent: Components<Omit<Theme, 'components'>>['MuiSnackbarContent'] = {
  defaultProps: {
    variant: 'elevation',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.grey[950],
      color: theme.palette.grey[100],
      borderRadius: Number(theme.shape.borderRadius) * 8,
      padding: theme.spacing(0.75),
    }),
    message: {
      padding: 0,
    },
    action: ({ theme }) => ({
      '& .iconify': {
        color: theme.palette.grey[100],
      },
    }),
  },
};
