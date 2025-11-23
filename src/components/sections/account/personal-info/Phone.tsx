import { useState } from 'react';
import { Link, Stack, Typography } from '@mui/material';
import { useAccounts } from 'providers/AccountsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import PhoneTextfield from 'components/base/PhoneTextfield';
import AccountDialog from '../common/AccountDialog';
import InfoCard from '../common/InfoCard';
import InfoCardAttribute from '../common/InfoCardAttribute';

const Phone = () => {
  const [open, setOpen] = useState(false);
  const { personalInfo } = useAccounts();
  const match = personalInfo.phoneNumber.match(/\(\+(\d+)\)(\d+)/);

  const handleClose = () => setOpen(false);

  return (
    <>
      <InfoCard setOpen={setOpen} sx={{ mb: 2 }}>
        <Stack direction="column" spacing={{ xs: 2, sm: 1 }}>
          <InfoCardAttribute label="Number" value={personalInfo.phoneNumber} />
        </Stack>
        <IconifyIcon
          icon="material-symbols-light:edit-outline"
          sx={{ fontSize: 20, color: 'neutral.dark', visibility: 'hidden' }}
        />
      </InfoCard>
      <AccountDialog
        title="Phone"
        subtitle="Ensure your phone number to enable account recovery and receive important notifications."
        open={open}
        handleConfirm={handleClose}
        handleDialogClose={handleClose}
        handleDiscard={handleClose}
        sx={{
          maxWidth: 463,
        }}
      >
        <PhoneTextfield
          defaultValue={{
            code: match?.[1] as string,
            number: match?.[2] as string,
          }}
        />
      </AccountDialog>
      <Stack direction="column" spacing={1} alignItems="flex-start">
        <Typography variant="body2" sx={{ color: 'text.secondary', textWrap: 'pretty' }}>
          This phone number has to be confirmed to ensure its authenticity first before being
          connected with your profile.
        </Typography>
        <Link
          href="#!"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 'body2.fontSize',
          }}
        >
          Confirm your number{' '}
          <IconifyIcon icon="material-symbols:chevron-right" sx={{ fontSize: 20 }} />
        </Link>
      </Stack>
    </>
  );
};

export default Phone;
