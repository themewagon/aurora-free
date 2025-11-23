import { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { useAccounts } from 'providers/AccountsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import AccountDialog from '../common/AccountDialog';
import InfoCard from '../common/InfoCard';
import InfoCardAttribute from '../common/InfoCardAttribute';

const Names = () => {
  const { personalInfo } = useAccounts();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <InfoCard setOpen={setOpen}>
        <Stack direction="column" spacing={{ xs: 2, sm: 1 }}>
          <InfoCardAttribute label="First Name" value={personalInfo.firstName} />
          <InfoCardAttribute label="Last Name" value={personalInfo.lastName} />
        </Stack>
        <IconifyIcon
          icon="material-symbols-light:edit-outline"
          sx={{ fontSize: 20, color: 'neutral.dark', visibility: 'hidden' }}
        />
      </InfoCard>
      <AccountDialog
        title="Name"
        subtitle="Enter your updated first and last name below. Your name will be reflected across all your account settings."
        open={open}
        handleConfirm={handleClose}
        handleDialogClose={handleClose}
        handleDiscard={handleClose}
        sx={{ maxWidth: 463 }}
      >
        <Stack direction="column" spacing={1} p={0.125}>
          <TextField
            placeholder="First Name"
            label="First Name"
            defaultValue={personalInfo.firstName}
            fullWidth
          />
          <TextField
            placeholder="Last Name"
            label="Last Name"
            defaultValue={personalInfo.lastName}
            fullWidth
          />
        </Stack>
      </AccountDialog>
    </>
  );
};

export default Names;
