import { Box, Typography } from '@mui/material';

interface TableLabelDisplayedRowsProps {
  from: number;
  to: number;
  count: number;
}

const TableLabelDisplayedRows = ({ from, to, count }: TableLabelDisplayedRowsProps) => {
  return (
    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
      <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
        Showing
      </Box>
      <Typography variant="caption" sx={{ fontWeight: 'bold', mx: 0.5 }}>
        {from}-{to} out of {count}
      </Typography>
      <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
        items
      </Box>
    </Typography>
  );
};

export default TableLabelDisplayedRows;
