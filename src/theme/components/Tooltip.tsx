import { Theme, tooltipClasses } from '@mui/material';
import { Components } from '@mui/material/styles';

const generateArrowStyles = (
  borderRadiusProperty: string,
  clipPath?: string,
  positions?: object,
): object => {
  if (!clipPath && !positions) {
    return {
      [`.${tooltipClasses.tooltip}`]: {
        [`.${tooltipClasses.arrow}::before`]: {
          [borderRadiusProperty]: 2,
        },
      },
    };
  }
  return {
    [`.${tooltipClasses.tooltip}`]: {
      [borderRadiusProperty]: 0,
      [`.${tooltipClasses.arrow}`]: {
        transform: 'translate3d(0,0,0) !important',
        ...positions,
        '&::before': {
          transform: 'rotate(0deg)',
          clipPath,
          [borderRadiusProperty]: 2,
        },
      },
    },
  };
};

const placements = (theme: Theme) => {
  const isRTL = theme.direction === 'rtl';

  return [
    {
      placement: 'top-start',
      borderRadiusProperty: isRTL ? 'borderBottomRightRadius' : 'borderBottomLeftRadius',
      clipPath: 'polygon(0 0, 100% 0, 17% 100%, 0% 100%)',
      positions: { bottom: 3 },
    },
    {
      placement: 'top',
      borderRadiusProperty: isRTL ? 'borderBottomLeftRadius' : 'borderBottomRightRadius',
    },
    {
      placement: 'top-end',
      borderRadiusProperty: isRTL ? 'borderBottomLeftRadius' : 'borderBottomRightRadius',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 83% 100%)',
      positions: {
        bottom: 3,
        right: isRTL ? 'unset !important' : '0px !important',
        left: isRTL ? 0 : 'unset !important',
      },
    },
    {
      placement: 'bottom-start',
      borderRadiusProperty: isRTL ? 'borderTopRightRadius' : 'borderTopLeftRadius',
      clipPath: 'polygon(0 0, 17% 0, 100% 100%, 0 100%)',
      positions: { top: 3 },
    },
    {
      placement: 'bottom',
      borderRadiusProperty: isRTL ? 'borderTopRightRadius' : 'borderTopLeftRadius',
    },
    {
      placement: 'bottom-end',
      borderRadiusProperty: isRTL ? 'borderTopLeftRadius' : 'borderTopRightRadius',
      clipPath: 'polygon(87% 0, 100% 0, 100% 100%, 0 100%)',
      positions: { top: 3, right: '0px !important', left: isRTL ? 0 : 'unset !important' },
    },
    {
      placement: 'left-start',
      borderRadiusProperty: isRTL ? 'borderTopLeftRadius' : 'borderTopRightRadius',
      clipPath: 'polygon(100% 0, 100% 17%, 0 100%, 0 0)',
      positions: { right: 3 },
    },
    {
      placement: 'left-end',
      borderRadiusProperty: isRTL ? 'borderBottomLeftRadius' : 'borderBottomRightRadius',
      clipPath: 'polygon(0 0, 100% 87%, 100% 100%, 0 100%)',
      positions: { top: 'unset !important', bottom: 0, right: 3 },
    },
    {
      placement: 'left',
      borderRadiusProperty: isRTL ? 'borderTopLeftRadius' : 'borderTopRightRadius',
    },
    {
      placement: 'right-start',
      borderRadiusProperty: isRTL ? 'borderTopRightRadius' : 'borderTopLeftRadius',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 17%)',
      positions: { left: isRTL ? 'unset' : 3 },
    },
    {
      placement: 'right',
      borderRadiusProperty: isRTL ? 'borderBottomRightRadius' : 'borderBottomLeftRadius',
    },
    {
      placement: 'right-end',
      borderRadiusProperty: isRTL ? 'borderBottomRightRadius' : 'borderBottomLeftRadius',
      clipPath: 'polygon(0 83%, 100% 0, 100% 100%, 0 100%)',
      positions: {
        top: 'unset !important',
        bottom: 0,
        left: isRTL ? 'unset' : 3,
      },
    },
  ];
};

const Tooltip: Components<Omit<Theme, 'components'>>['MuiTooltip'] = {
  defaultProps: {
    arrow: true,
    placement: 'top',
    enterTouchDelay: 0,
  },
  styleOverrides: {
    popper: ({ theme }) =>
      placements(theme).reduce(
        (styles, { placement, borderRadiusProperty, clipPath, positions }) => {
          return {
            ...styles,
            [`&[data-popper-placement="${placement}"]`]: generateArrowStyles(
              borderRadiusProperty,
              clipPath,
              positions,
            ),
          };
        },
        {},
      ),
    tooltip: ({ theme }) => ({
      backgroundColor: theme.vars.palette.grey[800],
      ...theme.typography.caption,
      padding: '8px 10px',
    }),
    arrow: ({ theme }) => ({
      color: theme.vars.palette.grey[800],
    }),
  },
};

export default Tooltip;
