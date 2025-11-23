import { useNavigate } from 'react-router';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import paths from 'routes/paths';
import PasswordTextField from 'components/common/PasswordTextField';
import SocialAuth from './SocialAuth';

interface LoginFormProps {
  defaultCredential?: { email: string; password: string };
}
const LoginForm = ({ defaultCredential }: LoginFormProps) => {
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
          maxWidth: '35rem',
          rowGap: 4,
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
            <Typography variant="h4">Log in</Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'text.secondary',
              }}
            >
              Don&apos;t have an account?
              <Link href={paths.signup} sx={{ ml: 1 }}>
                Sign up
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
                  id="email"
                  type="email"
                  label="Email"
                  defaultValue={defaultCredential?.email}
                />
              </Grid>
              <Grid
                sx={{
                  mb: 2.5,
                }}
                size={12}
              >
                <PasswordTextField
                  fullWidth
                  size="large"
                  id="password"
                  label="Password"
                  defaultValue={defaultCredential?.password}
                />
              </Grid>
              <Grid
                sx={{
                  mb: 6,
                }}
                size={12}
              >
                <Stack
                  spacing={1}
                  sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox name="checked" color="primary" size="small" />}
                    label={
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        Remember this device
                      </Typography>
                    }
                  />

                  <Link href="#!" variant="subtitle2">
                    Forgot Password?
                  </Link>
                </Stack>
              </Grid>
              <Grid size={12}>
                <Button fullWidth type="submit" size="large" variant="contained">
                  Log in
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Link href="#!" variant="subtitle2">
        Trouble signing in?
      </Link>
    </Stack>
  );
};

export default LoginForm;
