import { SvgIcon, SvgIconProps, useTheme } from '@mui/material';

const CheckBoxIndeterminateIcon = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <rect width="16" height="16" rx="4" fill="currentColor" />
      <path
        d="M3.83331 8.5C3.68887 8.5 3.56942 8.45278 3.47498 8.35833C3.38054 8.26389 3.33331 8.14444 3.33331 8C3.33331 7.85556 3.38054 7.73611 3.47498 7.64167C3.56942 7.54722 3.68887 7.5 3.83331 7.5H12.1666C12.3111 7.5 12.4305 7.54722 12.525 7.64167C12.6194 7.73611 12.6666 7.85556 12.6666 8C12.6666 8.14444 12.6194 8.26389 12.525 8.35833C12.4305 8.45278 12.3111 8.5 12.1666 8.5H3.83331Z"
        fill={theme.vars.palette.background.default}
      />
    </SvgIcon>
  );
};

export default CheckBoxIndeterminateIcon;
