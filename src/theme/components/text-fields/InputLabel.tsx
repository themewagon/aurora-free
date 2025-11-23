import { Theme, inputLabelClasses } from '@mui/material';
import { Components } from '@mui/material/styles';

declare module '@mui/material/InputLabel' {
  interface InputLabelPropsSizeOverrides {
    large: true;
  }
}

const getApplyShrink = (ownerState: any) => {
  let applyShrink = ownerState.shrink;
  //@ts-ignore
  if (ownerState.formControl.adornedStart) {
    //@ts-ignore
    applyShrink = ownerState.focused || ownerState.formControl.filled;
  }
  return applyShrink;
};

const InputLabel: Components<Omit<Theme, 'components'>>['MuiInputLabel'] = {
  styleOverrides: {
    root: {
      variants: [
        {
          props: { size: 'medium' },
          style: {
            transform: 'translate(16px,14px) scale(1)',
          },
        },
        {
          props: { size: 'small' },
          style: {
            transform: 'translate(12px, 11px) scale(1)',
          },
        },
        {
          props: { size: 'large' },
          style: { fontSize: '16px', transform: 'translate(20px, 17px) scale(1)' },
        },
        {
          props: { variant: 'standard' },
          style: {
            transform: 'translate(2px,14px) scale(1)',
          },
        },
        // filled shrink
        {
          props: ({ variant, ownerState }) => variant === 'filled' && getApplyShrink(ownerState),
          style: {
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
        // filled shrink adornedStart
        {
          props: ({ variant, ownerState }) =>
            variant === 'filled' &&
            getApplyShrink(ownerState) &&
            //@ts-ignore
            ownerState.formControl.adornedStart,
          style: {
            [`&.${inputLabelClasses.shrink}`]: {
              transform: 'translate(44px, 6px) scale(.85)',
              [`&.${inputLabelClasses.sizeSmall}`]: {
                transform: 'translate(36px, 4px) scale(.85)',
              },
              [`&.MuiInputLabel-sizeLarge`]: {
                transform: 'translate(52px, 6px) scale(.75)',
              },
            },
          },
        },
        // filled default adornedStart
        {
          props: ({ variant, ownerState }) =>
            variant === 'filled' &&
            //@ts-ignore
            ownerState.formControl.adornedStart,
          style: {
            transform: 'translate(44px, 14px) scale(1)',
            [`&.${inputLabelClasses.sizeSmall}`]: {
              transform: 'translate(36px, 12px) scale(1)',
            },
            [`&.MuiInputLabel-sizeLarge`]: {
              transform: 'translate(52px, 18px) scale(1)',
            },
          },
        },
      ],
      fontSize: '14px',
    },

    filled: () => {
      return {
        lineHeight: 1.3,
      };
    },
    outlined: () => {
      return {
        lineHeight: 1.3,
        transform: 'translate(16px, 14px) scale(1)',
        [`&.${inputLabelClasses.shrink}`]: {
          fontWeight: 500,
          transform: 'translate(16px, -7px) scale(.85)',
        },
        [`&.${inputLabelClasses.sizeSmall}`]: {
          transform: 'translate(12px, 12px) scale(1)',
          [`&.${inputLabelClasses.shrink}`]: {
            transform: 'translate(12px, -7px) scale(.85)',
          },
        },
        '&.MuiInputLabel-sizeLarge': {
          transform: 'translate(20px, 18px) scale(1)',
          [`&.${inputLabelClasses.shrink}`]: {
            transform: 'translate(20px, -7px) scale(.75)',
          },
        },
      };
    },
    standard: () => {
      return {
        [`&.${inputLabelClasses.shrink}`]: {
          transform: 'translate(0, 0) scale(.75)',
        },
      };
    },
  },
};

export default InputLabel;
