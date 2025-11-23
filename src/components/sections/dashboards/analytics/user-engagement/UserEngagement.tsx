import { JSX, SyntheticEvent, useRef, useState } from 'react';
import { Box, ButtonBase, Paper, Stack, Tab, Tabs, Typography, tabsClasses } from '@mui/material';
import { userEngagementTabs } from 'data/dashboard';
import EChartsReactCore from 'echarts-for-react/lib/core';
import useToggleChartLegends from 'hooks/useToggleChartLegends';
import { UserEngagementChartData } from 'types/dashboard';
import UserEngagementChart from './UserEngagementChart';

interface UserEngagementProps {
  data: UserEngagementChartData;
}

interface LegendButtonProps {
  active: boolean;
  onClick: () => void;
  icon: JSX.Element;
  label: string;
}

const LegendButton = ({ active, onClick, icon, label }: LegendButtonProps) => (
  <ButtonBase
    disableRipple
    sx={{
      display: 'flex',
      gap: 1,
      alignItems: 'center',
      opacity: active ? 0.5 : 1,
    }}
    onClick={onClick}
  >
    {icon}
    <Typography variant="subtitle2" fontWeight={700} color="text.secondary">
      {label}
    </Typography>
  </ButtonBase>
);

const UserEngagement = ({ data }: UserEngagementProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const chartRef = useRef<null | EChartsReactCore>(null);
  const { legendState, handleLegendToggle } = useToggleChartLegends(chartRef);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const currentTab = userEngagementTabs[tabIndex];
  const currentTabData = data[currentTab.key];

  return (
    <Paper component={Stack} direction="column" sx={{ height: 1, p: { xs: 3, md: 5 } }}>
      <Box sx={{ boxShadow: (theme) => `inset 0 -1px 0 0 ${theme.vars.palette.divider}` }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            [`& .${tabsClasses.list}`]: { gap: 5 },
          }}
        >
          {userEngagementTabs.map(({ key, title, value }, index) => (
            <Tab
              key={key}
              sx={{
                alignItems: 'flex-start',
                px: 0,
                py: 1.5,
              }}
              label={
                <>
                  <Typography variant="subtitle2" fontWeight={700} mb={0.5}>
                    {title}
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={500}
                    color={tabIndex === index ? 'text.primary' : 'text.secondary'}
                  >
                    {value}
                  </Typography>
                </>
              }
            />
          ))}
        </Tabs>
      </Box>

      <Stack gap={5} alignItems="center" ml={{ md: 'auto' }} my={4}>
        <LegendButton
          active={legendState['Actual value']}
          onClick={() => handleLegendToggle('Actual value')}
          icon={
            <Box
              sx={{
                width: 18,
                height: 4,
                bgcolor: 'chBlue.300',
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
          }
          label="Actual Value"
        />
        <LegendButton
          active={legendState['Projected value']}
          onClick={() => handleLegendToggle('Projected value')}
          icon={
            <Stack gap={0.25}>
              {[0, 1].map((index) => (
                <Box
                  key={index}
                  sx={{
                    width: 10,
                    height: 4,
                    bgcolor: 'chGreen.200',
                    borderRadius: 1,
                    flexShrink: 0,
                  }}
                />
              ))}
            </Stack>
          }
          label="Projected Value"
        />
      </Stack>

      <UserEngagementChart
        ref={chartRef}
        data={currentTabData}
        activeTab={currentTab.key}
        sx={{
          minHeight: '200px',
          height: {
            xs: '220px !important',
            sm: '296px !important',
            xl: '285px !important',
          },
          width: 1,
        }}
      />
    </Paper>
  );
};

export default UserEngagement;
