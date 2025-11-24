import Grid from '@mui/material/Grid';
import {
  analyticKPIs,
  topCampaignsChartData,
  userByCountryData,
  userEngagementChartData,
} from 'data/dashboard';
import ProPlanCTA from 'components/sections/dashboards/analytics/cta/ProPlanCTA';
import AnalyticKPI from 'components/sections/dashboards/analytics/kpi/AnalyticKPI';
import TopCampaigns from 'components/sections/dashboards/analytics/top-campaigns/TopCampaigns';
import UserByCountry from 'components/sections/dashboards/analytics/user-by-country/UserByCountry';
import UserEngagement from 'components/sections/dashboards/analytics/user-engagement/UserEngagement';

const Analytics = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, xl: 5 }} container>
        {analyticKPIs.map((kpi) => (
          <Grid key={kpi.title} size={{ xs: 6, md: 3, xl: 6 }}>
            <AnalyticKPI kpi={kpi} />
          </Grid>
        ))}
      </Grid>

      <Grid size={{ xs: 12, lg: 7 }}>
        <UserEngagement data={userEngagementChartData} />
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <TopCampaigns data={topCampaignsChartData} />
      </Grid>

      <Grid size={{ xs: 12, xl: 7 }}>
        <UserByCountry data={userByCountryData} />
      </Grid>
      <Grid size={12}>
        <ProPlanCTA />
      </Grid>
    </Grid>
  );
};

export default Analytics;
