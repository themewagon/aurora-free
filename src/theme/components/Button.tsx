import { ButtonProps, ComponentsVariants, Theme, capitalize } from '@mui/material';
import { ButtonClasses, buttonClasses } from '@mui/material/Button';
import { Components } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { cssVarRgba } from 'lib/utils';
import { PaletteColorKey } from 'theme/palette';
import { LinkBehavior } from './Link';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
    dashed: true;
  }

  interface ButtonPropsColorOverrides {
    neutral: true;
  }

  interface ButtonClasses {
    outlinedNeutral: true;
  }

  interface ButtonOwnProps {
    shape?: 'square' | 'circle';
  }
}

const btnColors: PaletteColorKey[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
];

//Button soft variants
const btnCustomVariants: ComponentsVariants['MuiButton'] = btnColors.map((color) => ({
  props: { variant: 'soft', color: color as ButtonProps['color'] },
  style: (style) => {
    const theme = style.theme as Theme;

    return {
      background: cssVarRgba(theme.vars.palette[color].mainChannel, 0.15),
      color: theme.vars.palette[color].dark,
      '&:hover': {
        background: cssVarRgba(theme.vars.palette[color].mainChannel, 0.2),
      },
    };
  },
}));

const shapes = ['circle', 'square'];
const sizes: {
  [key: string]: number;
} = { small: 30, medium: 36, large: 42 };

const btnShapeVariants: ComponentsVariants['MuiButton'] = [];

shapes.forEach((shape) => {
  Object.keys(sizes).forEach((size) => {
    btnShapeVariants.push({
      props: { shape: shape as ButtonProps['shape'], size: size as ButtonProps['size'] },
      style: {
        height: sizes[size],
        minWidth: sizes[size],
        padding: 0,
        borderRadius: shape === 'circle' ? '50%' : undefined,
      },
    });
  });
});

const outlineStyles = (theme: Theme) =>
  btnColors.reduce((acc: any, color) => {
    const paletteColor = theme.vars.palette[color];

    acc[
      `&.${buttonClasses.outlined}.${buttonClasses[`color${capitalize(color)}` as keyof ButtonClasses]}`
    ] = {
      '&:hover': {
        backgroundColor: cssVarRgba(paletteColor.mainChannel, 0.12),
        borderColor: cssVarRgba(paletteColor.mainChannel, 0.5),
      },
    };

    return acc;
  }, {});

const textBtnStyles = (theme: Theme) =>
  btnColors.reduce((acc: any, color) => {
    const paletteColor = theme.vars.palette[color];

    acc[
      `&.${buttonClasses.text}.${buttonClasses[`color${capitalize(color)}` as keyof ButtonClasses]}`
    ] = {
      '&:hover': {
        backgroundColor: cssVarRgba(paletteColor.mainChannel, 0.12),
      },
    };

    return acc;
  }, {});

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  variants: [
    ...btnCustomVariants,
    ...btnShapeVariants,
    {
      props: { variant: 'outlined', color: 'neutral' },
      style: (style) => {
        const theme = style.theme as Theme;
        return {
          borderColor: theme.vars.palette.background.elevation4,
          '&:hover': {
            backgroundColor: theme.vars.palette.background.elevation2,
          },
        };
      },
    },
    {
      props: { variant: 'soft', color: 'neutral' },
      style: (style) => {
        const theme = style.theme as Theme;
        return {
          background: theme.vars.palette.background.elevation2,
          color: theme.vars.palette.neutral.main,
          '&:hover': {
            background: theme.vars.palette.background.elevation3,
          },
          ...theme.applyStyles('dark', {
            color: theme.vars.palette.neutral.dark,
          }),
        };
      },
    },
  ],
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: 'none',
      fontSize: '14px',
      fontWeight: 600,
      borderRadius: '8px',
      padding: theme.spacing(1, 2),
      lineHeight: 1.429,
      ...outlineStyles(theme),
      ...textBtnStyles(theme),
    }),
    sizeLarge: {
      fontSize: '16px',
      padding: '10px 22px',
      lineHeight: 1.375,
    },
    sizeSmall: {
      padding: '6px 10px',
      lineHeight: 1.286,
    },
    outlinedSizeLarge: {
      paddingTop: '9px',
      paddingBottom: '9px',
    },
    outlinedSizeMedium: {
      paddingTop: '7px',
      paddingBottom: '7px',
    },
    outlinedSizeSmall: {
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    outlinedError: {},

    startIcon: {
      marginRight: 4,
      '& > *:first-of-type': {
        fontSize: 16,
      },
    },
    endIcon: {
      marginLeft: 4,
      '& > *:first-of-type': {
        fontSize: 16,
      },
    },
    iconSizeLarge: {
      '& > *:first-of-type': {
        fontSize: 16,
      },
    },
  },
};

export const ButtonBase: Components<Omit<Theme, 'components'>>['MuiButtonBase'] = {
  defaultProps: {
    LinkComponent: LinkBehavior,
  },
};
export default Button;
