import { Button, Paper, Stack, Typography } from '@mui/material';
import { freeThemewagonLink, storeLink } from 'lib/constants';

const ProPlanCTA = () => {
  return (
    <Paper
      component={Stack}
      gap={2}
      sx={{
        p: { xs: 3, md: 5 },
        bgcolor: 'success.lighter',
        justifyContent: 'space-between',
        alignItems: { sm: 'center' },
        flexWrap: { xs: 'wrap', sm: 'nowrap' },
        height: 1,
      }}
    >
      <Stack
        gap={0.5}
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            typography: { xs: 'h4', sm: 'h3' },
            flexShrink: { sm: 0 },
            lineClamp: 1,
            wordBreak: 'break-all',
          }}
        >
          Try our pro features
        </Typography>

        <Typography
          sx={{
            typography: { xs: 'subtitle2', sm: 'subtitle1' },
            fontWeight: { xs: 400, sm: 400 },
            color: 'text.secondary',
          }}
        >
          Starts from only $59.
        </Typography>
      </Stack>

      <Stack gap={1} alignItems="center" sx={{ flexShrink: 0 }}>
        <Button href={freeThemewagonLink} target="_blank" color="neutral">
          Download Free
        </Button>
        <Button href={storeLink} target="_blank" variant="contained" color="neutral">
          Upgrade to Pro
        </Button>
      </Stack>
    </Paper>
  );
};

export default ProPlanCTA;
