import { ChipProps, ComponentsVariants, Theme, chipClasses } from '@mui/material';
import { Components } from '@mui/material/styles';
import { cssVarRgba } from 'lib/utils';
import { PaletteColorKey } from 'theme/palette';
import IconifyIcon from 'components/base/IconifyIcon';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    soft: true;
  }
  interface ChipPropsColorOverrides {
    neutral: true;
  }
  interface ChipPropsSizeOverrides {
    large: true;
    xsmall: true;
  }
}

const chipColors: PaletteColorKey[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
];

//Chip soft variants
const chipSoftVariants: ComponentsVariants['MuiChip'] = chipColors.map((color) => ({
  props: { variant: 'soft', color: color as ChipProps['color'] },
  style: (style) => {
    const theme = style.theme as Theme;

    return {
      background: cssVarRgba(theme.vars.palette[color].mainChannel, 0.15),
      border: `1px solid ${cssVarRgba(theme.vars.palette[color].mainChannel, 0.25)}`,
      color: theme.vars.palette[color].dark,
      [`&.${chipClasses.clickable}`]: {
        '&:hover': {
          background: cssVarRgba(theme.vars.palette[color].mainChannel, 0.36),
        },
      },
      [`&.${chipClasses.deletable}`]: {
        [`& .${chipClasses.deleteIcon}`]: {
          color: cssVarRgba(theme.vars.palette[color].darkChannel, 0.5),
          '&:hover': {
            color: theme.vars.palette[color].dark,
          },
        },
      },
    };
  },
}));

chipSoftVariants.push({
  props: { variant: 'soft', color: 'neutral' },
  style: (style) => {
    const theme = style.theme as Theme;
    return {
      background: theme.vars.palette.background.elevation2,
      color: theme.vars.palette.neutral.dark,
      border: `1px solid ${theme.vars.palette.background.elevation3}`,
      [`&.${chipClasses.clickable}`]: {
        '&:hover': {
          background: theme.vars.palette.background.elevation3,
        },
      },
      [`&.${chipClasses.deletable}`]: {
        [`& .${chipClasses.deleteIcon}`]: {
          color: cssVarRgba(theme.vars.palette.action.disabledChannel, 0.5),
          '&:hover': {
            color: theme.vars.palette.text.disabled,
          },
        },
      },
    };
  },
});

const Chip: Components<Omit<Theme, 'components'>>['MuiChip'] = {
  variants: [
    ...chipSoftVariants,
    {
      props: { variant: 'outlined', color: 'neutral' },
      style: (style) => {
        const theme = style.theme as Theme;
        return {
          borderColor: theme.vars.palette.background.elevation4,
          [`& .${chipClasses.label}`]: {
            color: theme.vars.palette.text.primary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          [`&.${chipClasses.clickable}`]: {
            '&:hover': {
              backgroundColor: theme.vars.palette.background.elevation4,
            },
          },
          [`& .${chipClasses.deleteIcon}`]: {
            flexShrink: 0,
            color: cssVarRgba(theme.vars.palette.action.activeChannel, 0.5),
            '&:hover': {
              color: theme.vars.palette.action.active,
            },
          },
        };
      },
    },

    ...chipColors.map((color) => ({
      props: { variant: 'outlined', color: color } as Partial<ChipProps>,
      style: ({ theme }: { theme: Omit<Theme, 'components'> }) => {
        return {
          border: `1px solid ${cssVarRgba(theme.vars.palette[color].mainChannel, 0.5)}`,
          [`&.${chipClasses.clickable}`]: {
            '&:hover': {
              backgroundColor: cssVarRgba(theme.vars.palette[color].mainChannel, 0.12),
            },
          },
          [`& .${chipClasses.deleteIcon}`]: {
            color: cssVarRgba(theme.vars.palette[color].mainChannel, 0.5),
            '&:hover': {
              color: cssVarRgba(theme.vars.palette[color].mainChannel, 1),
            },
          },
        };
      },
    })),
    ...chipColors.map((color) => ({
      props: { variant: 'filled', color: color } as Partial<ChipProps>,
      style: ({ theme }: { theme: Omit<Theme, 'components'> }) => {
        return {
          [`& .${chipClasses.deleteIcon}`]: {
            color: cssVarRgba(theme.vars.palette[color].lighterChannel, 0.5),
            '&:hover': {
              color: cssVarRgba(theme.vars.palette[color].lighterChannel, 1),
            },
          },
        };
      },
    })),
  ],
  defaultProps: {
    deleteIcon: <IconifyIcon icon="material-symbols:cancel-rounded" />,
    color: 'neutral',
    variant: 'soft',
    size: 'small',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '&.MuiChip-sizeLarge': {
        padding: theme.spacing(0.5),
        height: 32,
        [`& .${chipClasses.icon}`]: {
          fontSize: 18,
          margin: 0,
        },
        [`& .${chipClasses.deleteIcon}`]: {
          fontSize: 18,
          margin: 0,
          marginRight: 2,
        },
        [`& .${chipClasses.avatar}`]: {
          height: 24,
          width: 24,
        },
        '& .MuiChip-labelLarge': {
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
        },
      },
      '&.MuiChip-sizeXsmall': {
        padding: theme.spacing(0.5),
        height: 16,
        [`& .${chipClasses.icon}`]: {
          fontSize: 10,
          margin: 1,
        },
        [`& .${chipClasses.deleteIcon}`]: {
          fontSize: 10,
          margin: 1,
        },
        [`& .${chipClasses.avatar}`]: {
          height: 12,
          width: 12,
        },
        '& .MuiChip-labelXsmall': {
          paddingLeft: theme.spacing(0.25),
          paddingRight: theme.spacing(0.25),
          fontSize: 10,
        },
      },
    }),
    label: ({ theme }) => ({
      ...theme.typography.subtitle2,
      fontWeight: 600,
      lineHeight: 1,
      overflow: 'unset',
    }),
    avatar: {
      height: 16,
      width: 16,
      margin: 0,
    },
    sizeSmall: ({ theme }) => ({
      height: 20,
      padding: 2,
      [`& .${chipClasses.label}`]: {
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
        fontSize: 12,
      },
      [`& .${chipClasses.icon}`]: {
        fontSize: 12,
        margin: 2,
      },
      [`& .${chipClasses.deleteIcon}`]: {
        fontSize: 12,
        margin: 2,
      },
    }),
    sizeMedium: ({ theme }) => ({
      height: 24,
      padding: 4,
      [`& .${chipClasses.label}`]: {
        paddingLeft: theme.spacing(0.75),
        paddingRight: theme.spacing(0.75),
        fontSize: 12,
      },
      [`& .${chipClasses.icon}`]: {
        fontSize: 14,
        margin: '0 2px 2px 2px',
      },
      [`& .${chipClasses.deleteIcon}`]: {
        fontSize: 14,
        margin: '2px 2px 2px 0',
      },
    }),
  },
};

export default Chip;
