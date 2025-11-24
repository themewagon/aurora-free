import { Button, Paper, Stack, Typography } from '@mui/material';
import { freeThemewagonLink, storeLink } from 'lib/constants';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import Image from 'components/base/Image';
import bg from '/assets/images/cta-bg.svg';

const ProPlanCTA = () => {
  const { up } = useBreakpoints();
  const upSm = up('sm');
  return (
    <Paper
      sx={{
        p: { xs: 3, md: 5 },
        height: 1,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Image
        src={bg}
        sx={{ position: 'absolute', inset: 0, height: 1, width: 1, objectFit: 'cover', zIndex: -1 }}
      />
      <Stack
        direction="column"
        gap={4}
        sx={{
          alignItems: 'center',
        }}
      >
        <Stack
          direction="column"
          gap={0.5}
          sx={{
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              typography: { xs: 'h4', sm: 'h3' },
              flexShrink: { sm: 0 },
              textAlign: 'center',
            }}
          >
            Discover More with Our Pro License
          </Typography>

          <Stack gap={1} sx={{ alignItems: 'center' }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
              }}
            >
              Starts from only
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'success.dark',
              }}
            >
              $59
            </Typography>
          </Stack>
        </Stack>

        <Stack gap={1} sx={{ flexShrink: 0 }}>
          <Button
            href={storeLink}
            target="_blank"
            size={upSm ? 'large' : 'medium'}
            variant="contained"
            color="neutral"
          >
            See Now
          </Button>
          <Button
            href={freeThemewagonLink}
            target="_blank"
            size={upSm ? 'large' : 'medium'}
            variant="soft"
            color="neutral"
          >
            Download Free
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ProPlanCTA;
