import {
  RadioProps,
  Theme,
  formControlLabelClasses,
  radioClasses,
  svgIconClasses,
} from '@mui/material';
import { Components } from '@mui/material/styles';
import { cssVarRgba } from 'lib/utils';
import { PaletteColorKey } from 'theme/palette';
import { RadioBlankIcon, RadioCheckedIcon } from 'components/icons/RadioIcon';

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    large: true;
  }
}

const colors: PaletteColorKey[] = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

const Radio: Components<Omit<Theme, 'components'>>['MuiRadio'] = {
  variants: [
    ...colors.map((color) => ({
      props: { color: color as RadioProps['color'] },
      style: (style: { theme: Theme }) => {
        const theme = style.theme;
        const paletteColor = theme.vars.palette[color];
        return {
          '&:hover': {
            background: cssVarRgba(paletteColor.mainChannel, 0.12),
          },
        };
      },
    })),
    {
      props: { color: 'default' },
      style: (style) => {
        const theme = style.theme as Theme;
        return {
          '&:hover': {
            background: theme.vars.palette.background.elevation2,
          },
        };
      },
    },
  ],
  defaultProps: {
    size: 'small',
    icon: <RadioBlankIcon viewBox="0 0 16 16" className="radio-blank-icon" />,
    checkedIcon: <RadioCheckedIcon className="radio-checked-icon" viewBox="0 0 16 16" />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        {
          props: { size: 'medium' },
          style: {
            [`+.${formControlLabelClasses.label}`]: {
              marginTop: 7,
            },
          },
        },
        {
          props: { size: 'large' },
          style: {
            [`+.${formControlLabelClasses.label}`]: {
              marginTop: 9,
            },
          },
        },
      ],
      [`.${svgIconClasses.fontSizeSmall}`]: {
        fontSize: 16,
      },
      [`.${svgIconClasses.fontSizeMedium}`]: {
        fontSize: 20,
      },
      [`.${svgIconClasses.fontSizeLarge}`]: {
        fontSize: 24,
      },
      [`&.${radioClasses.disabled}`]: {
        [`&.${radioClasses.checked}`]: {
          color: theme.vars.palette.action.disabled,
        },
        [`&:not(.${radioClasses.checked})`]: {
          [`& .${svgIconClasses.root}`]: {
            color: theme.vars.palette.action.disabledBackground,
          },
        },
      },
      [`+.${formControlLabelClasses.label}`]: {
        marginTop: 5,
      },
      '& .radio-blank-icon': {
        color: theme.vars.palette.background.elevation4,
      },
      [`&.${radioClasses.disabled}`]: {
        '& .radio-blank-icon': {
          color: theme.vars.palette.action.disabledBackground,
        },
      },
    }),
  },
};
export default Radio;
