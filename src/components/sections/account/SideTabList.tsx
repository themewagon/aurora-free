import { Dispatch, SetStateAction, SyntheticEvent, useEffect } from 'react';
import { TabList } from '@mui/lab';
import { InputAdornment, PaperProps, Stack, SxProps, Typography, tabsClasses } from '@mui/material';
import { accountTabs } from 'data/account/account-tabs';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import StyledTextField from 'components/styled/StyledTextField';
import AccountTab from './common/AccountTab';

interface SideTabListProps extends PaperProps {
  setShowTabList: Dispatch<SetStateAction<boolean>>;
  handleChange: (event: SyntheticEvent, newValue: string) => void;
  sx?: SxProps;
}

const SideTabList = ({ setShowTabList, handleChange, sx }: SideTabListProps) => {
  const { down, currentBreakpoint } = useBreakpoints();

  const downMd = down('md');

  useEffect(() => {
    if (!downMd) {
      setShowTabList(false);
    }
  }, [downMd]);

  return (
    <Stack direction="column" spacing={3} sx={{ p: { xs: 3, md: 5 }, ...sx }}>
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontSize: {
            xs: 'h4.fontSize',
            md: 'h6.fontSize',
            lg: 'h4.fontSize',
          },
        }}
      >
        <IconifyIcon
          icon="material-symbols:settings-outline"
          sx={{ fontSize: { xs: 20, lg: 24 } }}
        />
        Account Settings
      </Typography>
      <Stack direction="column" spacing={2} sx={{ width: 1 }}>
        <StyledTextField
          id="settings-search-box"
          type="search"
          placeholder="Find a setting"
          fullWidth
          size="large"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconifyIcon icon="material-symbols:search-rounded" />
                </InputAdornment>
              ),
            },
          }}
          sx={{ maxWidth: { xs: 1, sm: 0.5, md: 1 } }}
        />

        <TabList
          orientation="vertical"
          variant="scrollable"
          scrollButtons={false}
          onChange={handleChange}
          sx={{
            [`& .${tabsClasses.indicator}`]: {
              display: 'none',
            },
            [`& .${tabsClasses.list}`]: {
              gap: 1,
              display: currentBreakpoint === 'sm' ? 'grid' : 'flex',
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          }}
        >
          {accountTabs.map((tab) => (
            <AccountTab
              key={tab.id}
              value={tab.value}
              icon={
                <IconifyIcon
                  icon={tab.icon}
                  sx={{ fontSize: 24, color: 'primary.dark', flexShrink: 0 }}
                />
              }
              label={
                <Typography
                  noWrap
                  fontWeight={700}
                  sx={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    flexGrow: 1,
                    textAlign: 'left',
                  }}
                >
                  {tab.label}
                </Typography>
              }
              onClick={() => {
                if (downMd) setShowTabList(false);
                window.scrollTo(0, 0);
              }}
              sx={{
                maxWidth: 'none',
                '&:hover': { bgcolor: 'background.elevation3' },
              }}
            />
          ))}
        </TabList>
      </Stack>
    </Stack>
  );
};

export default SideTabList;
