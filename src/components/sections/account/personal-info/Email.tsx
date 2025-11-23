import { useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { useAccounts } from 'providers/AccountsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import AccountDialog from '../common/AccountDialog';
import InfoCard from '../common/InfoCard';
import InfoCardAttribute from '../common/InfoCardAttribute';

const Email = () => {
  const [open, setOpen] = useState(false);
  const { personalInfo } = useAccounts();

  const handleClose = () => setOpen(false);

  return (
    <>
      <InfoCard setOpen={setOpen} sx={{ mb: 2 }}>
        <Stack direction="column" spacing={{ xs: 2, sm: 1 }}>
          <InfoCardAttribute label="Primary Email" value={personalInfo.primaryEmail} />
          <InfoCardAttribute label="Secondary Email" value={personalInfo.secondaryEmail} />
        </Stack>
        <IconifyIcon
          icon="material-symbols-light:edit-outline"
          sx={{ fontSize: 20, color: 'neutral.dark', visibility: 'hidden' }}
        />
      </InfoCard>
      <AccountDialog
        title="Email Address"
        subtitle="Update your primary email address. You can also set an alternate email address for extra security and backup."
        open={open}
        handleConfirm={handleClose}
        handleDialogClose={handleClose}
        handleDiscard={handleClose}
        sx={{
          maxWidth: 463,
        }}
      >
        <Stack direction="column" spacing={1} p={0.125}>
          <TextField
            placeholder="Primary Email"
            label="Primary Email"
            defaultValue={personalInfo.primaryEmail}
            fullWidth
          />
          <TextField
            placeholder="Secondary Email"
            label="Secondary Email"
            defaultValue={personalInfo.secondaryEmail}
            fullWidth
          />
        </Stack>
      </AccountDialog>
      <Stack spacing={1} sx={{ color: 'info.main' }}>
        <IconifyIcon icon="material-symbols:info" sx={{ fontSize: 24 }} />
        <Typography variant="body2">
          Your alternate email will be used to gain access to your account if you ever have issues
          with logging in with your primary email.
        </Typography>
      </Stack>
    </>
  );
};

export default Email;
