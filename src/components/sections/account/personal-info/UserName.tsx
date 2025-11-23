import { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { useAccounts } from 'providers/AccountsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import AccountDialog from '../common/AccountDialog';
import InfoCard from '../common/InfoCard';
import InfoCardAttribute from '../common/InfoCardAttribute';

const UserName = () => {
  const { personalInfo } = useAccounts();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <InfoCard setOpen={setOpen}>
        <Stack direction="column" spacing={{ xs: 2, sm: 1 }} justifyContent="center">
          <InfoCardAttribute label="User Name" value={personalInfo.userName} />
        </Stack>
        <IconifyIcon
          icon="material-symbols-light:edit-outline"
          sx={{ fontSize: 20, color: 'neutral.dark', visibility: 'hidden' }}
        />
      </InfoCard>
      <AccountDialog
        title="User Name"
        subtitle="Update your username. This change will apply to your account and be visible to others in your interactions."
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
            placeholder="User Name"
            label="User Name"
            defaultValue={personalInfo.userName}
            fullWidth
          />
        </Stack>
      </AccountDialog>
    </>
  );
};

export default UserName;
