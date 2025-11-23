import { Button, Paper, Stack, Typography } from '@mui/material';
import { storeLink } from 'lib/constants';

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
        <Typography variant="h3" sx={{ typography: { xs: 'h4', sm: 'h3' }, flexShrink: { sm: 0 } }}>
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

      <Button
        href={storeLink}
        target="_blank"
        variant="contained"
        color="neutral"
        size="large"
        sx={{ flexShrink: 0, alignSelf: 'center' }}
      >
        Upgrade to Pro
      </Button>
    </Paper>
  );
};

export default ProPlanCTA;
