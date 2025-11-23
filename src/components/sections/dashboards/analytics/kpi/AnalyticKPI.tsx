import { Avatar, Link, Paper, Typography } from '@mui/material';
import { formatNumber } from 'lib/utils';
import { AnalyticKPIData } from 'types/dashboard';
import IconifyIcon from 'components/base/IconifyIcon';

const AnalyticKPI = ({ kpi }: { kpi: AnalyticKPIData }) => {
  const { title, link, value, icon } = kpi;

  return (
    <Paper
      sx={{
        height: 1,
        p: { xs: 3, md: 5 },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          mb: 3,
          color: 'text.secondary',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </Typography>

      <Avatar
        variant="rounded"
        sx={{
          width: 48,
          height: 48,
          bgcolor: `${icon.color}.lighter`,
          borderRadius: 2,
          mb: 1,
        }}
      >
        <IconifyIcon
          icon={icon.name}
          sx={{
            fontSize: 32,
            color: `${icon.color}.main`,
          }}
        />
      </Avatar>

      <Typography variant="h4" sx={{ fontWeight: 500, mb: 3 }}>
        {typeof value === 'number' ? formatNumber(value) : value}
      </Typography>

      <Typography
        variant="caption"
        sx={{
          fontWeight: 500,
          color: 'text.secondary',
          display: 'flex',
          gap: 0.5,
          flexWrap: 'wrap',
        }}
      >
        {link.prefix}
        <Link href={link.url}>{link.text}</Link>
      </Typography>
    </Paper>
  );
};

export default AnalyticKPI;
