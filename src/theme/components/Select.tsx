import { Theme, inputBaseClasses, selectClasses } from '@mui/material';
import { Components } from '@mui/material/styles';
import IconifyIcon from 'components/base/IconifyIcon';

const Select: Components<Omit<Theme, 'components'>>['MuiSelect'] = {
  defaultProps: {
    IconComponent: (props) => (
      <IconifyIcon
        icon="material-symbols:keyboard-arrow-down-rounded"
        {...props}
        sx={(theme) => ({ color: `${theme.vars.palette.text.secondary} !important`, fontSize: 24 })}
      />
    ),
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '&::before': {
        borderBottom: `1px solid ${theme.vars.palette.grey[300]}`,
      },
      [`& .${selectClasses.icon}`]: {
        fontSize: 20,
        right: 16,
      },
      [`&.${inputBaseClasses.sizeSmall}`]: {
        [`& .${selectClasses.outlined}`]: {
          paddingTop: 9.5,
          paddingBottom: 9.5,
        },
        [`& .${selectClasses.icon}`]: {
          fontSize: 16,
          right: 12,
        },
      },
      '&.MuiInputBase-sizeLarge': {
        [`& .${selectClasses.outlined}`]: {
          paddingTop: 15.5,
          paddingBottom: 15.5,
          height: 'auto',
        },
        [`& .${selectClasses.filled}`]: {
          paddingTop: 24,
        },
        [`& .${selectClasses.icon}`]: {
          fontSize: 24,
          right: 20,
        },
      },
    }),
    select: {
      '&:focus': {
        backgroundColor: 'transparent',
        borderRadius: 8,
      },
    },
    standard: {
      paddingTop: 8,
      paddingBottom: 8,
    },
    filled: {
      paddingTop: 20,
      [`&.${inputBaseClasses.sizeSmall} > .${inputBaseClasses.input}`]: {
        paddingTop: 17,
        paddingBottom: 2,
      },
    },
    outlined: {
      paddingTop: 12.5,
      paddingBottom: 12.5,
      [`&.${inputBaseClasses.sizeSmall} > .${inputBaseClasses.input}`]: {
        paddingTop: 12,
        paddingBottom: 8,
      },
    },
  },
};

export default Select;
