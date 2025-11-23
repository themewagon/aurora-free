import {
  ComponentsVariants,
  Theme,
  ToggleButtonGroupProps,
  ToggleButtonProps,
  toggleButtonClasses,
} from '@mui/material';
import { Components } from '@mui/material/styles';
import { cssVarRgba } from 'lib/utils';
import { PaletteColorKey } from 'theme/palette';

const toggleBtnColors: PaletteColorKey[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
];

const toggleBtnCustomVariants: ComponentsVariants['MuiToggleButton'] = toggleBtnColors.map(
  (color) => ({
    props: { color: color as ToggleButtonProps['color'] },
    style: (style) => {
      const theme = style.theme as Theme;
      const paletteColor = theme.vars.palette[color];
      return {
        backgroundColor: 'transparent',
        color: paletteColor.dark,
        '&:hover': {
          backgroundColor: cssVarRgba(paletteColor.mainChannel, 0.15),
        },
        '&.Mui-selected': {
          color: paletteColor.dark,
        },
      };
    },
  }),
);

const toggleBtnGroupCustomVariants: ComponentsVariants['MuiToggleButtonGroup'] =
  toggleBtnColors.map((color) => ({
    props: { color: color as ToggleButtonGroupProps['color'] },
    style: (style) => {
      const theme = style.theme as Theme;
      const paletteColor = theme.vars.palette[color];
      return {
        [`& .${toggleButtonClasses.root}`]: {
          color: paletteColor.light,
          '&.Mui-selected': {
            color: paletteColor.dark,
            backgroundColor: cssVarRgba(paletteColor.mainChannel, 0.15),
            '&:hover': {
              color: paletteColor.light,
            },
          },
        },
      };
    },
  }));

const ToggleButton: Components<Omit<Theme, 'components'>>['MuiToggleButton'] = {
  variants: [
    ...toggleBtnCustomVariants,
    {
      props: { color: 'standard' },
      style: (style) => {
        const theme = style.theme as Theme;
        return {
          backgroundColor: 'transparent',
          color: theme.vars.palette.neutral.dark,
          '&:hover': {
            backgroundColor: theme.vars.palette.background.elevation2,
          },
          '&.Mui-selected': {
            backgroundColor: theme.vars.palette.background.elevation2,
            '&:hover': {
              backgroundColor: theme.vars.palette.background.elevation2,
            },
          },
        };
      },
    },
  ],
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      border: 'none',
      '&.Mui-disabled': {
        border: 'none',
      },
      '&.Mui-selected': {
        '&.Mui-disabled': {
          border: 'none',
          backgroundColor: 'transparent',
          color: theme.vars.palette.text.disabled,
        },
      },
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.75),
      borderRadius: theme.shape.borderRadius,
      '& .iconify': {
        fontSize: 18,
      },
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(1),
      borderRadius: (theme.shape.borderRadius as number) * 1.5,
      '& .iconify': {
        fontSize: 20,
      },
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.125),
      borderRadius: (theme.shape.borderRadius as number) * 2,
      '& .iconify': {
        fontSize: 24,
      },
    }),
  },
};

export const ToggleButtonGroup: Components<Omit<Theme, 'components'>>['MuiToggleButtonGroup'] = {
  variants: [
    ...toggleBtnGroupCustomVariants,
    {
      props: { color: 'standard' },
      style: (style) => {
        const theme = style.theme as Theme;
        return {
          [`& .${toggleButtonClasses.root}`]: {
            color: theme.vars.palette.text.secondary,
            '&:hover': {
              color: theme.vars.palette.neutral.dark,
            },
            '&.Mui-selected': {
              color: theme.vars.palette.neutral.dark,
            },
            '&.Mui-disabled': {
              color: theme.vars.palette.text.disabled,
            },
          },
        };
      },
    },
  ],
  defaultProps: {
    color: 'standard',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: (theme.shape.borderRadius as number) * 2,
      padding: theme.spacing(0.5),
      gap: theme.spacing(0.25),
      width: 'max-content',
      backgroundColor: theme.vars.palette.background.elevation1,
      [`& .${toggleButtonClasses.root}`]: {
        borderRadius: theme.shape.borderRadius,
        border: 'none !important',
        marginLeft: 0,
      },
    }),
  },
};

export default ToggleButton;
