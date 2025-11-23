import { SvgIcon, SvgIconProps, useTheme } from '@mui/material';

const CheckBoxCheckedIcon = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <rect width="16" height="16" rx="4" fill="currentColor" />
      <path
        d="M6.29999 11.7C6.23332 11.7 6.17221 11.6889 6.11666 11.6667C6.0611 11.6444 6.00555 11.6056 5.94999 11.55L2.93333 8.53334C2.83333 8.43334 2.78333 8.31111 2.78333 8.16667C2.78333 8.02223 2.83333 7.9 2.93333 7.8C3.03333 7.7 3.14999 7.65 3.28333 7.65C3.41666 7.65 3.53332 7.7 3.63332 7.8L6.29999 10.4667L12.35 4.41667C12.45 4.31667 12.5694 4.26667 12.7083 4.26667C12.8472 4.26667 12.9667 4.31667 13.0667 4.41667C13.1667 4.51667 13.2167 4.63611 13.2167 4.775C13.2167 4.91389 13.1667 5.03334 13.0667 5.13334L6.64999 11.55C6.59444 11.6056 6.53888 11.6444 6.48333 11.6667C6.42777 11.6889 6.36666 11.7 6.29999 11.7Z"
        fill={theme.vars.palette.background.default}
      />
    </SvgIcon>
  );
};

export default CheckBoxCheckedIcon;
