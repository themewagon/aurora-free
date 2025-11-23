import {
  Theme,
  chipClasses,
  filledInputClasses,
  inputBaseClasses,
  inputLabelClasses,
  outlinedInputClasses,
} from '@mui/material';
import { Components } from '@mui/material/styles';
import IconifyIcon from 'components/base/IconifyIcon';

declare module '@mui/material' {
  interface AutocompletePropsSizeOverrides {
    large: true;
  }
}

const Autocomplete: Components<Omit<Theme, 'components'>>['MuiAutocomplete'] = {
  defaultProps: {
    popupIcon: <IconifyIcon icon="material-symbols:keyboard-arrow-down-rounded" fontSize="24" />,
    slotProps: {
      paper: {
        variant: 'elevation',
        elevation: 6,
      },
      chip: {
        variant: 'outlined',
        size: 'small',
      },
    },
  },
  styleOverrides: {
    root: {
      [`& .${inputLabelClasses.root}`]: {
        left: 0,

        [`&.${inputLabelClasses.filled}`]: {
          [`&.${inputLabelClasses.shrink}`]: {
            transform: 'translate(16px, 6px) scale(.85)',
            [`&.${inputLabelClasses.sizeSmall}`]: {
              transform: 'translate(12px, 4px) scale(.85)',
            },
            [`&.MuiInputLabel-sizeLarge`]: {
              transform: 'translate(20px, 6px) scale(.75)',
            },
          },
        },
      },
      [`& .${filledInputClasses.root}`]: {
        [`& .${filledInputClasses.input}`]: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    inputRoot: {
      paddingBottom: 5,
      columnGap: 4,
      [`&.${filledInputClasses.root}`]: {
        paddingLeft: 16,
        paddingTop: 19,
        [`&.${inputBaseClasses.sizeSmall}`]: {
          paddingLeft: 12,
          paddingTop: 17,
        },
        [`&.MuiInputBase-sizeLarge`]: {
          paddingLeft: 20,
          paddingTop: 24,
          paddingBottom: 8,
        },
      },
      [`&.${outlinedInputClasses.root}`]: {
        paddingLeft: 16,
        paddingTop: 8,
        paddingBottom: 8,
        [`&.${inputBaseClasses.sizeSmall}`]: {
          paddingLeft: 12,
          // paddingTop: 17,
        },
        [`&.MuiInputBase-sizeLarge`]: {
          paddingLeft: 20,
          // paddingTop: 24,
          paddingBottom: 8,
        },
      },
    },
    input: {
      // padding: '4px !important',
      padding: '0px !important',
    },
    tag: {
      margin: 0,
      fontSize: 14,
      marginTop: 6,
      [`& .${chipClasses.label}`]: {
        lineHeight: 1.2,
      },
    },
    option: {
      padding: '8px 16px',
      fontSize: 14,
      minHeight: '0px !important',
    },
  },
};

export default Autocomplete;
