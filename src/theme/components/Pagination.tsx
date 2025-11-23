import { ComponentsVariants, PaginationProps, Theme, paginationItemClasses } from '@mui/material';
import { Components, PaletteColor, PaletteColorChannel } from '@mui/material/styles';
import { cssVarRgba } from 'lib/utils';
import { PaletteColorKey } from 'theme/palette';
import IconifyIcon from 'components/base/IconifyIcon';

declare module '@mui/material/Pagination' {
  interface PaginationPropsVariantOverrides {
    solid: true;
  }
  interface PaginationPropsColorOverrides {
    neutral: true;
    warning: true;
    info: true;
    error: true;
    success: true;
  }
}
declare module '@mui/material/PaginationItem' {
  interface PaginationItemPropsVariantOverrides {
    solid: true;
  }
  interface PaginationItemPropsColorOverrides {
    neutral: true;
    warning: true;
    info: true;
    error: true;
    success: true;
  }
}

const paginationSolidColors: PaletteColorKey[] = [
  'neutral',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
];

const FirstIcon = () => (
  <IconifyIcon icon="material-symbols:keyboard-double-arrow-left-rounded" fontSize={20} />
);
const LastIcon = () => (
  <IconifyIcon icon="material-symbols:keyboard-double-arrow-right-rounded" fontSize={20} />
);
const NextIcon = () => <IconifyIcon icon="material-symbols:chevron-right-rounded" fontSize={20} />;
const previousIcon = () => (
  <IconifyIcon icon="material-symbols:chevron-left-rounded" fontSize={20} />
);

const paginationCustomVariants: ComponentsVariants['MuiPaginationItem'] = paginationSolidColors.map(
  (color) => ({
    props: { variant: 'solid', color: color as PaginationProps['color'] },
    style: ({ theme }: { theme: Omit<Theme, 'components'> }) => {
      const paletteColor = theme.vars.palette[color];
      return {
        [`&.${paginationItemClasses.selected}, &.${paginationItemClasses.selected}:hover`]: {
          backgroundColor: paletteColor.dark,
          color: paletteColor.contrastText,
        },
        [`&.${paginationItemClasses.colorPrimary}`]: {
          [`&.${paginationItemClasses.selected}`]: {
            color: theme.vars.palette.common.white,
            backgroundColor: theme.vars.palette.primary.main,
          },
        },
      };
    },
  }),
);

const Pagination: Components<Omit<Theme, 'components'>>['MuiPagination'] = {
  defaultProps: {
    shape: 'rounded',
  },
};

export const PaginationItem: Components<Omit<Theme, 'components'>>['MuiPaginationItem'] = {
  variants: [...paginationCustomVariants],
  defaultProps: {
    slots: {
      next: NextIcon,
      previous: previousIcon,
      first: FirstIcon,
      last: LastIcon,
    },
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        variants: [
          {
            props: ({ color }) => {
              return color !== 'standard';
            },
            style: (
              props: PaginationProps & {
                theme: Omit<Theme, 'components'>;
              },
            ) => {
              const { theme, color } = props;
              const colorKey = color as keyof typeof theme.vars.palette;
              const paletteColor = theme.vars.palette[colorKey] as PaletteColor &
                PaletteColorChannel;
              return {
                [`&.${paginationItemClasses.selected}, &.${paginationItemClasses.selected}:hover`]:
                  {
                    backgroundColor: cssVarRgba(paletteColor.mainChannel, 0.36),
                    color: paletteColor.main,
                  },
              };
            },
          },
        ],
        borderRadius: 8,
        '&:hover': {
          backgroundColor: theme.vars.palette.neutral.lighter,
        },
        [`&.${paginationItemClasses.selected}, &.${paginationItemClasses.selected}:hover`]: {
          backgroundColor: theme.vars.palette.action.focus,
          color: theme.vars.palette.text.primary,
        },
      };
    },
    sizeSmall: {
      height: 24,
      minWidth: 24,
      borderRadius: 6,
    },
  },
};
export default Pagination;
