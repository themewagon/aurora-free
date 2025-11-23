import { Box, Divider, Link, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <>
      <Divider />
      <Stack
        component="footer"
        direction={{ xs: 'column', sm: 'row' }}
        sx={[
          {
            columnGap: 2,
            rowGap: 0.5,
            bgcolor: 'background.default',
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: 'center',
            height: { xs: 72, sm: 56 },
            py: 1,
            px: { xs: 3, md: 5 },
            textAlign: { xs: 'center', sm: 'left' },
          },
        ]}
      >
        <Typography
          variant="caption"
          component="p"
          sx={{
            lineHeight: 1.6,
            fontWeight: 'light',
            color: 'text.secondary',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Box component="span" whiteSpace="nowrap">
            Thank you for creating with
            <Box component="strong" mx={0.5}>
              Aurora{' '}
            </Box>
          </Box>

          <Box component="span" whiteSpace="nowrap">
            <Box component="span" display={{ xs: 'none', sm: 'inline' }}>
              |
            </Box>{' '}
            {dayjs().year()} ©
            <Link
              href="https://themewagon.com/"
              target="_blank"
              sx={{ textDecoration: 'none', mx: 0.5 }}
            >
              ThemeWagon
            </Link>
          </Box>
        </Typography>

        <Typography
          variant="caption"
          component="p"
          sx={{
            fontWeight: 'light',
            color: 'text.secondary',
          }}
        >
          v{import.meta.env.VITE_APP_VERSION}
        </Typography>
      </Stack>
    </>
  );
};

export default Footer;
