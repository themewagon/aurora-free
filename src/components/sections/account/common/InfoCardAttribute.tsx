import { Stack, Typography } from '@mui/material';

interface InfoCardAttributeProps {
  label: string;
  value: string;
}

const InfoCardAttribute = ({ label, value }: InfoCardAttributeProps) => {
  return (
    <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }}>
      <Typography variant="subtitle2" sx={{ minWidth: 120, fontWeight: 700 }}>
        {label}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontWeight: 400, overflowWrap: 'anywhere' }}>
        {value}
      </Typography>
    </Stack>
  );
};

export default InfoCardAttribute;
