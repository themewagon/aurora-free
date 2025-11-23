import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';
import DataGridPaginationAction from 'components/pagination/DataGridPaginationAction';
import TableLabelDisplayedRows from 'components/pagination/TableLabelDisplayedRows';

const TablePagination: Components<Omit<Theme, 'components'>>['MuiTablePagination'] = {
  defaultProps: {
    rowsPerPageOptions: [],
    labelDisplayedRows: TableLabelDisplayedRows,
    ActionsComponent: DataGridPaginationAction,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.vars.palette.background.elevation1,
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    }),
    toolbar: {
      paddingRight: '24px !important',
      minHeight: '46px !important',
    },
    spacer: {
      display: 'none',
    },
    actions: {
      marginLeft: 8,
      flex: 1,
    },
    selectLabel: {
      paddingLeft: 10,
      display: 'none',
    },
    input: {
      display: 'none',
    },
    displayedRows: ({ theme }) => ({
      lineHeight: 1.2,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }),
  },
};

export default TablePagination;
