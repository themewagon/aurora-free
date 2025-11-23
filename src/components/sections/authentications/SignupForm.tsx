import { useNavigate } from 'react-router';
import { Box, Button, Divider, Link, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import paths from 'routes/paths';
import PasswordTextField from 'components/common/PasswordTextField';
import SocialAuth from './SocialAuth';

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Stack
      direction="column"
      sx={{
        height: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        pt: { md: 10 },
        pb: 10,
      }}
    >
      <div />

      <Grid
        container
        sx={{
          height: 1,
          maxWidth: '35rem',
          rowGap: 4,
          alignContent: { md: 'center' },
          p: { xs: 3, sm: 5 },
          mb: 5,
        }}
      >
        <Grid size={12}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            sx={{
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
            }}
          >
            <Typography variant="h4">Sign up</Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'text.secondary',
              }}
            >
              Already have an account?
              <Link href={paths.login} sx={{ ml: 1 }}>
                Log in
              </Link>
            </Typography>
          </Stack>
        </Grid>

        <Grid size={12}>
          <SocialAuth />
        </Grid>
        <Grid size={12}>
          <Divider sx={{ color: 'text.secondary' }}>or use email</Divider>
        </Grid>

        <Grid size={12}>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container>
              <Grid
                sx={{
                  mb: 3,
                }}
                size={12}
              >
                <TextField
                  fullWidth
                  size="large"
                  id="name"
                  type="text"
                  label="Name"
                  variant="filled"
                />
              </Grid>
              <Grid
                sx={{
                  mb: 3,
                }}
                size={12}
              >
                <TextField
                  fullWidth
                  size="large"
                  id="email"
                  type="email"
                  label="Email"
                  variant="filled"
                />
              </Grid>
              <Grid
                sx={{
                  mb: 4,
                }}
                size={12}
              >
                <PasswordTextField
                  fullWidth
                  size="large"
                  id="password"
                  label="Password"
                  variant="filled"
                />
              </Grid>

              <Grid size={12}>
                <Button fullWidth type="submit" size="large" variant="contained">
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Link href="#!" variant="subtitle2" sx={{ flex: 1 }}>
        Trouble signing in?
      </Link>
    </Stack>
  );
};

export default SignupForm;
