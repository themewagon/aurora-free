import { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { countries } from 'data/countries';
import { useAccounts } from 'providers/AccountsProvider';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import CountrySelect from 'components/common/CountrySelect';
import AccountDialog from '../common/AccountDialog';
import InfoCard from '../common/InfoCard';
import InfoCardAttribute from '../common/InfoCardAttribute';

const Address = () => {
  const [open, setOpen] = useState(false);
  const { personalInfo } = useAccounts();
  const { up } = useBreakpoints();
  const upSm = up('sm');

  const handleClose = () => setOpen(false);

  return (
    <>
      <InfoCard setOpen={setOpen} sx={{ mb: 3 }}>
        <Stack direction="column" spacing={{ xs: 2, sm: 1 }}>
          <InfoCardAttribute label="Country" value={personalInfo.country} />
          <InfoCardAttribute label="State" value={personalInfo.state} />
          <InfoCardAttribute label="City" value={personalInfo.city} />
          <InfoCardAttribute label="Street" value={personalInfo.street} />
          <InfoCardAttribute label="ZIP" value={personalInfo.zip} />
        </Stack>
        <IconifyIcon
          icon="material-symbols-light:edit-outline"
          sx={{ fontSize: 20, color: 'neutral.dark', visibility: 'hidden' }}
        />
      </InfoCard>
      <AccountDialog
        title="Address"
        subtitle="Enter your updated address to ensure we have your most recent and accurate location information."
        open={open}
        handleConfirm={handleClose}
        handleDialogClose={handleClose}
        handleDiscard={handleClose}
        sx={{
          maxWidth: 463,
        }}
      >
        <Stack direction="column" spacing={1} p={0.125}>
          <CountrySelect
            sx={{ mb: 1 }}
            fullWidth
            defaultValue={countries.find((country) => country.label === personalInfo.country)}
            renderInput={(params) => <TextField label="Country" {...params} />}
          />
          <TextField
            placeholder="State"
            label="State"
            defaultValue={personalInfo.state}
            fullWidth
          />
          <TextField placeholder="City" label="City" defaultValue={personalInfo.city} fullWidth />
          <TextField
            placeholder="Street"
            label="Street"
            defaultValue={personalInfo.street}
            fullWidth
          />
          <TextField placeholder="ZIP" label="ZIP" defaultValue={personalInfo.zip} fullWidth />
        </Stack>
      </AccountDialog>
      <FormControl sx={{ gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
          Who can see your address?
        </Typography>
        <RadioGroup
          row={upSm}
          defaultValue="followers_only"
          aria-labelledby="address-visibility-radio-buttons"
        >
          <FormControlLabel value="only_me" control={<Radio />} label="Only me" />
          <FormControlLabel value="followers_only" control={<Radio />} label="Followers only" />
          <FormControlLabel value="everyone" control={<Radio />} label="Everyone" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Address;
