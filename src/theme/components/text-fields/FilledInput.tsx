import {
  ComponentsVariants,
  FilledInputProps,
  Theme,
  autocompleteClasses,
  filledInputClasses,
  inputBaseClasses,
} from '@mui/material';
import { Components } from '@mui/material/styles';
import { PaletteColorKey } from 'theme/palette';

const filledInputColors: PaletteColorKey[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
];

const filledInputCustomVariants: ComponentsVariants['MuiFilledInput'] = filledInputColors.map(
  (color) => ({
    props: { color: color as FilledInputProps['color'] },
    style: (style) => {
      const theme = style.theme as Theme;
      const paletteColor = theme.vars.palette[color];
      return {
        [`&.${filledInputClasses.focused}`]: {
          backgroundColor: paletteColor.lighter,
          boxShadow: `0 0 0 1px ${paletteColor.main}`,
        },
      };
    },
  }),
);

export const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  variants: [
    ...filledInputCustomVariants,
    {
      props: { size: 'large' },
      style: {
        [`& .${filledInputClasses.input}`]: {
          paddingTop: 23,
          paddingBottom: 7,
          fontSize: '16px',
          paddingRight: '20px !important',
        },
        [`&:not(.${inputBaseClasses.adornedStart}) > .${inputBaseClasses.input}`]: {
          paddingLeft: '20px !important',
          [`&.${autocompleteClasses.input}`]: {
            paddingLeft: '0px !important',
          },
        },
      },
    },
  ],
  styleOverrides: {
    root: ({ theme }) => [
      {
        borderRadius: 8,
        backgroundColor: theme.vars.palette.background.elevation2,
        '&:hover': {
          backgroundColor: theme.vars.palette.background.elevation3,
        },
        '&:before, &:after': {
          display: 'none',
        },
        [`&.${filledInputClasses.focused}`]: {
          backgroundColor: theme.vars.palette.secondary.lighter,
          boxShadow: `0 0 0 1px ${theme.vars.palette.primary.main}`,
        },
        [`&.${filledInputClasses.error}`]: {
          backgroundColor: theme.vars.palette.error.lighter,
          boxShadow: `0 0 0 1px ${theme.vars.palette.error.main}`,
        },
        [`&.${filledInputClasses.disabled}`]: {
          backgroundColor: theme.vars.palette.action.disabledBackground,
        },
        [`&.${inputBaseClasses.multiline}`]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    ],
    input: () => ({
      paddingTop: 19,
      paddingBottom: 5,
      height: '1.5rem',
      fontSize: '14px',
      [`&:not(.${inputBaseClasses.adornedStart} > .${inputBaseClasses.input})`]: {
        paddingLeft: 16,
        paddingRight: 16,
      },
      '&:-webkit-autofill': {
        borderRadius: 'inherit',
      },
    }),
    sizeSmall: {
      borderRadius: 4,
      [`&.${inputBaseClasses.sizeSmall} > .${inputBaseClasses.input}`]: {
        paddingTop: 15,
        paddingBottom: 3,
        [`&:not(.${inputBaseClasses.adornedStart} > .${inputBaseClasses.input})`]: {
          paddingLeft: 12,
          paddingRight: 12,
        },
      },
    },
    multiline: {
      [`& .${filledInputClasses.input}`]: {
        padding: 0,
      },
    },
    adornedStart: {
      paddingLeft: 16,
      [`&.${inputBaseClasses.sizeSmall}`]: {
        paddingLeft: 12,
      },
      [`&.MuiInputBase-sizeLarge`]: {
        paddingLeft: 20,
      },
    },
  },
};

export default FilledInput;
