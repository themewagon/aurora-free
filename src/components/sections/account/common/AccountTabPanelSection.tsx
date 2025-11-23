import { PropsWithChildren, ReactElement } from 'react';
import { Box, Stack, SxProps, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

interface AccountTabPanelSectionProps {
  title: string;
  subtitle?: string;
  subtitleEl?: ReactElement;
  icon: string;
  sx?: SxProps;
  actionComponent?: ReactElement;
}

const AccountTabPanelSection = ({
  title,
  subtitle,
  subtitleEl,
  icon,
  children,
  sx,
  actionComponent,
}: PropsWithChildren<AccountTabPanelSectionProps>) => {
  return (
    <Box sx={{ ...(Array.isArray(sx) ? sx : [sx]) }}>
      <Stack sx={[{ mb: 1, justifyContent: 'space-between' }, !subtitle && { mb: 3 }]}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconifyIcon icon={icon} sx={{ fontSize: 24, mb: 0.25 }} />
          {title}
        </Typography>
        {actionComponent}
      </Stack>
      {subtitle && (
        <Typography
          variant="body2"
          sx={{ mb: subtitle && 3, color: 'text.secondary', textWrap: 'pretty' }}
        >
          {subtitle}
        </Typography>
      )}
      {subtitleEl}
      {children}
    </Box>
  );
};

export default AccountTabPanelSection;
