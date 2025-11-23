import { SvgIcon, SvgIconProps, useTheme } from '@mui/material';

export const RadioCheckedIcon = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <circle cx="8" cy="8" r="7.5" fill="currentColor" stroke="currentColor" />
      <circle cx="8" cy="8" r="3" fill={theme.vars.palette.background.default} />
    </SvgIcon>
  );
};

export const RadioBlankIcon = ({ sx, ...rest }: SvgIconProps) => {
  return (
    <SvgIcon
      sx={{
        fill: 'transparent',
        ...sx,
      }}
      {...rest}
    >
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" />
    </SvgIcon>
  );
};
