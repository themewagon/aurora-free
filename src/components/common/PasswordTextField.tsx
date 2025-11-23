import { SyntheticEvent, useState } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const PasswordTextField = ({ ref, ...props }: TextFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibilty = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <TextField
      type={isPasswordVisible ? 'text' : 'password'}
      ref={ref}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handlePasswordVisibilty}>
                {isPasswordVisible ? (
                  <IconifyIcon icon="material-symbols-light:visibility-outline-rounded" />
                ) : (
                  <IconifyIcon icon="material-symbols-light:visibility-off-outline-rounded" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

export default PasswordTextField;
