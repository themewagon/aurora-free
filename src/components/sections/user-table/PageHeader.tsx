import { JSX, PropsWithChildren } from 'react';
import { Paper, Stack, SxProps, Typography } from '@mui/material';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import PageBreadcrumb from './PageBreadcrumb';

interface PageHeaderProps {
  title: string;
  breadcrumb: { label: string; url?: string; active?: boolean }[];
  actionComponent?: JSX.Element;
  sx?: SxProps;
}

const PageHeader = ({
  title,
  breadcrumb,
  actionComponent,
  sx,
}: PropsWithChildren<PageHeaderProps>) => {
  const { down } = useBreakpoints();
  const downLg = down('lg');

  return (
    <Paper sx={{ px: { xs: 3, md: 5 }, py: 3 }}>
      <Stack
        sx={{
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { sm: 'flex-end' },
          justifyContent: 'space-between',
          ...sx,
        }}
      >
        <div>
          <PageBreadcrumb items={breadcrumb} sx={{ mb: 1 }} />
          <Typography variant="h4" sx={[downLg && { fontSize: 'h5.fontSize' }]}>
            {title}
          </Typography>
        </div>

        {actionComponent}
      </Stack>
    </Paper>
  );
};

export default PageHeader;
