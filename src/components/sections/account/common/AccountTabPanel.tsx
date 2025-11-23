import { PropsWithChildren, ReactElement } from 'react';
import { TabPanel } from '@mui/lab';
import { IconButton, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

interface AccountTabPanelProps {
  label: string;
  title: string;
  value: string;
  panelIcon: string;
  setShowTabList: (value: boolean) => void;
}

const AccountTabPanel = ({
  title,
  value,
  panelIcon,
  setShowTabList,
  children,
}: PropsWithChildren<AccountTabPanelProps>): ReactElement => {
  return (
    <TabPanel value={value} sx={{ p: 0 }}>
      <Stack sx={{ gap: 1, alignItems: 'center', mb: 5 }}>
        <IconButton onClick={() => setShowTabList(true)} sx={{ display: { md: 'none' }, ml: -1.5 }}>
          <IconifyIcon
            flipOnRTL
            icon="material-symbols:chevron-left-rounded"
            sx={{ color: 'neutral.main', fontSize: 20 }}
          />
        </IconButton>

        <Typography
          variant="h4"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: {
              xs: 'h6.fontSize',
              lg: 'h4.fontSize',
            },
          }}
        >
          <IconifyIcon
            icon={panelIcon}
            sx={{ fontSize: 32, display: { xs: 'none', md: 'inline' } }}
          />
          {title}
        </Typography>
      </Stack>
      {children}
    </TabPanel>
  );
};

export default AccountTabPanel;
