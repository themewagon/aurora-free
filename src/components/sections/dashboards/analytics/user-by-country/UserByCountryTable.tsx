import { useMemo } from 'react';
import { Chip, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridComparatorFn } from '@mui/x-data-grid';
import useNumberFormat from 'hooks/useNumberFormat';
import { UserByCountryData } from 'types/dashboard';
import IconifyIcon from 'components/base/IconifyIcon';
import DashboardMenu from 'components/common/DashboardMenu';
import DataGridPagination from 'components/pagination/DataGridPagination';

const calculateSummaryData = (data: UserByCountryData[]) => {
  return data.reduce(
    (acc, curr) => ({
      totalUsers: acc.totalUsers + curr.totalUsers,
      newUsers: acc.newUsers + curr.newUsers,
      engagedSessions: acc.engagedSessions + curr.engagedSessions,
      growthRate: acc.growthRate + parseFloat(curr.growthRate) * curr.totalUsers,
      totalWeight: acc.totalWeight + curr.totalUsers,
    }),
    {
      totalUsers: 0,
      newUsers: 0,
      engagedSessions: 0,
      growthRate: 0,
      totalWeight: 0,
    },
  );
};

const getGrowthRateColor = (rate: number) => {
  if (rate < 0) return 'error';
  if (rate <= 0.09) return 'neutral';

  return 'success';
};

const getGrowthRateIcon = (rate: number) => {
  if (rate < 0) return 'material-symbols:trending-down-rounded';
  if (rate <= 0.09) return 'material-symbols:trending-flat-rounded';

  return 'material-symbols:trending-up-rounded';
};

const createRowSortComparator = <T,>(baseComparator: (a: T, b: T) => number): GridComparatorFn => {
  return (v1: T, v2: T, param1, param2) => {
    const row1 = param1.api.getRow(param1.id);
    const row2 = param2.api.getRow(param2.id);

    if (row1?.id === '') return 0;
    if (row2?.id === '') return 0;

    return baseComparator(v1, v2);
  };
};

const UserByCountryTable = ({ data }: { data: UserByCountryData[] }) => {
  const { currencyFormat, numberFormat } = useNumberFormat();

  const summaryData = useMemo(() => calculateSummaryData(data), []);

  const averageGrowthRate = (summaryData.growthRate / summaryData.totalWeight).toFixed(2) + '%';

  const summaryRow = {
    id: '',
    country: { name: '', flag: '' },
    totalUsers: summaryData.totalUsers,
    newUsers: summaryData.newUsers,
    engagedSessions: summaryData.engagedSessions,
    growthRate: averageGrowthRate,
  };

  const columns: GridColDef<UserByCountryData>[] = useMemo(
    () => [
      {
        field: 'id',
        headerName: '#',
        width: 60,
        sortable: false,
        headerClassName: 'id-header',
        align: 'left',
        headerAlign: 'left',
        disableClick: true,
      },
      {
        field: 'country',
        headerName: 'Country',
        headerClassName: 'country-header',
        minWidth: 160,
        valueGetter: ({ name }) => name,
        renderCell: (params) => (
          <Stack spacing={1} sx={{ alignItems: 'center' }}>
            <IconifyIcon icon={params.row.country.flag} sx={{ fontSize: 24 }} />
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              {params.row.country.name}
            </Typography>
          </Stack>
        ),
        sortComparator: createRowSortComparator((a: string, b: string) => a.localeCompare(b)),
      },
      {
        field: 'totalUsers',
        headerName: 'Total User',
        width: 140,
        align: 'right',
        headerAlign: 'right',
        renderCell: (params) => (
          <Typography sx={{ fontWeight: params.row.id ? 500 : 400 }}>
            {numberFormat(params.row.totalUsers)}
          </Typography>
        ),
        sortComparator: createRowSortComparator((a: number, b: number) => a - b),
      },
      {
        field: 'growthRate',
        headerName: 'vs. Last week',
        minWidth: 136,
        flex: 1,
        align: 'right',
        headerAlign: 'right',
        renderCell: (params) => {
          const rate = parseFloat(params.row.growthRate);

          return (
            <Chip
              label={params.row.growthRate}
              color={getGrowthRateColor(rate)}
              variant="soft"
              size="small"
              icon={<IconifyIcon icon={getGrowthRateIcon(rate)} />}
              sx={{
                width: 1,
                maxWidth: 92,
                flexDirection: 'row-reverse',
              }}
            />
          );
        },
        sortComparator: createRowSortComparator(
          (a: string, b: string) => parseFloat(a) - parseFloat(b),
        ),
      },
      {
        field: 'newUsers',
        headerName: 'New User',
        minWidth: 120,
        align: 'right',
        headerAlign: 'right',
        renderCell: (params) => (
          <Typography sx={{ fontWeight: params.row.id ? 500 : 400 }}>
            {numberFormat(params.row.newUsers)}
          </Typography>
        ),
        sortComparator: createRowSortComparator((a: number, b: number) => a - b),
      },
      {
        field: 'engagedSessions',
        headerName: 'Engaged Sessions',
        minWidth: 184,
        flex: 1,
        align: 'right',
        headerAlign: 'right',
        renderCell: (params) => (
          <Typography sx={{ fontWeight: params.row.id ? 500 : 400 }}>
            {numberFormat(params.row.engagedSessions)}
          </Typography>
        ),
        sortComparator: createRowSortComparator((a: number, b: number) => a - b),
      },
      {
        field: 'action',
        headerName: '',
        sortable: false,
        minWidth: 60,
        align: 'right',
        headerAlign: 'right',
        renderCell: (params) => (params.row.actions ? <DashboardMenu /> : null),
      },
    ],
    [currencyFormat, numberFormat],
  );

  const combinedData = [summaryRow, ...data];

  return (
    <Stack direction="column" sx={{ width: 1 }}>
      <DataGrid
        rowHeight={48}
        rows={combinedData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        slots={{
          basePagination: (props) => <DataGridPagination showAllHref="#!" {...props} />,
        }}
        sx={{
          '& .margin': {
            pr: 5,
          },
          '& .MuiDataGrid-columnHeaders': {
            '& .MuiDataGrid-columnHeader': {
              '&[aria-colindex="1"]': {
                paddingLeft: '24px !important',
              },
            },
          },
        }}
      />
    </Stack>
  );
};

export default UserByCountryTable;
