import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import paths from 'routes/paths';
import UserListContainer from 'components/sections/user-table';
import PageHeader from 'components/sections/user-table/PageHeader';

const UserList = () => {
  return (
    <Stack direction="column" height={1}>
      <PageHeader
        title="User list"
        breadcrumb={[
          { label: 'Home', url: paths.root },
          { label: 'Users', active: true },
        ]}
        actionComponent={
          <Stack
            sx={{
              gap: 1,
            }}
          >
            <Button variant="soft" color="neutral">
              Export
            </Button>
            <Button variant="soft" color="neutral">
              Import
            </Button>
          </Stack>
        }
      />
      <Paper sx={{ flex: 1, p: { xs: 3, md: 5 } }}>
        <UserListContainer />
      </Paper>
    </Stack>
  );
};

export default UserList;
