import { Theme, listItemButtonClasses, listItemTextClasses, svgIconClasses } from '@mui/material';
import { Components } from '@mui/material/styles';

const List: Components<Omit<Theme, 'components'>>['MuiList'] = {
  defaultProps: {},
  styleOverrides: {},
};

export const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '12px 16px',
      borderRadius: 8,
      color: theme.vars.palette.text.secondary,
      '&:hover': {
        backgroundColor: theme.vars.palette.action.hover,
      },
      '&:focus-visible': {
        backgroundColor: theme.vars.palette.action.hover,
        outline: `1px solid ${theme.vars.palette.primary.main}`,
      },
      [`&.${listItemButtonClasses.selected}`]: {
        backgroundColor: theme.vars.palette.primary.lighter,
        color: theme.vars.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.vars.palette.primary.lighter,
        },
      },
    }),
    dense: {
      padding: '6px 16px',
    },
  },
};

export const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
  styleOverrides: {
    root: {
      color: 'inherit',
      minWidth: 20,
      [`& .${svgIconClasses.root}`]: {
        fontSize: 14,
      },
    },
  },
};

export const ListItemText: Components<Omit<Theme, 'components'>>['MuiListItemText'] = {
  defaultProps: {
    slotProps: {
      primary: {
        variant: 'subtitle1',
      },
    },
  },
  styleOverrides: {
    dense: {
      [`& .${listItemTextClasses.primary}`]: {
        fontSize: 14,
      },
    },
  },
};

export default List;
