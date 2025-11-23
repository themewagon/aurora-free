import { TextField, TextFieldProps, inputBaseClasses } from '@mui/material';
import StyledTextField from 'components/styled/StyledTextField';

interface NumberTextFieldProps extends Omit<TextFieldProps, 'variant'> {
  variant?: TextFieldProps['variant'] | 'custom';
  hideSpinButton?: boolean;
}

const NumberTextField = ({
  onChange,
  variant,
  sx,
  hideSpinButton = true,
  ref,
  ...rest
}: NumberTextFieldProps) => {
  const Component = variant === 'custom' ? StyledTextField : TextField;
  return (
    <Component
      ref={ref}
      type="number"
      variant={variant === 'custom' ? 'filled' : variant}
      onChange={(event) => {
        event.target.value = event.target.value.replace(/^0+(?=\d)/, '');
        if (onChange) {
          onChange(event);
        }
      }}
      sx={[
        hideSpinButton && {
          '& ::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
            display: 'none',
          },
          [`& .${inputBaseClasses.input}`]: {
            MozAppearance: 'textfield',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    />
  );
};

export default NumberTextField;
