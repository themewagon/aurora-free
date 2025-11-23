import { Theme, inputBaseClasses, tablePaginationClasses } from '@mui/material';
import { Components } from '@mui/material/styles';
import { cssVarRgba } from 'lib/utils';
import IconifyIcon from 'components/base/IconifyIcon';
import DataGridPagination from 'components/pagination/DataGridPagination';

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {
    disableRowSelectionOnClick: true,
    disableColumnMenu: true,
    columnHeaderHeight: 48,
    slots: {
      columnSortedDescendingIcon: ({ onLoad, ...props }) => (
        <IconifyIcon icon="material-symbols:sort-rounded" {...props} />
      ),
      columnSortedAscendingIcon: ({ onLoad, ...props }) => (
        <IconifyIcon
          icon="material-symbols:sort-rounded"
          {...props}
          sx={{ transform: 'rotateX(180deg)' }}
        />
      ),
      basePagination: DataGridPagination,
    },
    slotProps: {
      filterPanel: {
        filterFormProps: {
          columnInputProps: {
            variant: 'outlined',
          },
          valueInputProps: {
            InputComponentProps: {
              variant: 'outlined',
            },
          },
          operatorInputProps: {
            variant: 'outlined',
          },
          logicOperatorInputProps: {
            variant: 'outlined',
          },
        },
      },
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      border: 'none',
      overflow: 'unset',
      ['& .MuiDataGrid-filler']: {
        '--DataGrid-rowBorderColor': 'transparent',
      },
      '--DataGrid-rowBorderColor': theme.vars.palette.dividerLight,
    }),
    panel: ({ theme }) => ({
      ['& .MuiDataGrid-paper']: {
        borderRadius: theme.spacing(2),
        outline: 'none',
        background: theme.vars.palette.background.menu,
        border: '1px solid',
        borderColor: theme.vars.palette.menuDivider,
        boxShadow: theme.vars.shadows[3],
        padding: 0,
      },
    }),
    panelContent: {
      padding: 0,
    },
    filterForm: ({ theme }) => ({
      gap: theme.spacing(1),
      padding: theme.spacing(3),
      flexDirection: 'column',
      '& .MuiFormControl-root': {
        width: '100%',
        [`& .${inputBaseClasses.root}`]: {
          width: '100%',
        },
      },
    }),
    filterFormDeleteIcon: ({ theme }) => ({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      '&::before': {
        content: '"Filter"',
        color: theme.vars.palette.text.primary,
        fontWeight: 600,
        fontSize: theme.typography.subtitle1.fontSize,
      },
    }),
    main: {
      overflow: 'unset',
    },
    columnHeaders: ({ theme }) => ({
      '--DataGrid-t-header-background-base': theme.vars.palette.background.elevation1,
      overflow: 'hidden',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    }),
    columnHeaderTitleContainer: {
      overflow: 'unset',
      '& .MuiDataGrid-columnHeaderTitleContainerContent': {
        overflow: 'unset',
      },
    },
    row: ({ theme }) => ({
      '&.MuiDataGrid-row--firstVisible': { '--rowBorderColor': 'transparent' },
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-selected': {
        backgroundColor: cssVarRgba(theme.vars.palette.primary.lightChannel, 0.08),
      },
      '& .MuiDataGrid-cell': {
        [`&:nth-of-type(2)`]: {
          '&:not(.MuiDataGrid-cellCheckbox)': {
            paddingLeft: 24,
          },
        },
        [`&:nth-last-of-type(2)`]: {
          paddingRight: 24,
        },
      },
    }),
    columnHeader: {
      borderBottom: `0 !important`,
      '&.MuiDataGrid-columnHeader--last': {
        paddingRight: 24,
      },
      '&:focus': {
        outline: 'none',
      },
      '&:focus-within': {
        outline: 'none',
      },
    },
    columnSeparator: {
      display: 'none',
    },
    cell: ({ theme }) => ({
      lineHeight: 'unset',
      display: 'flex',
      alignItems: 'center',
      color: theme.vars.palette.text.secondary,
      ...theme.typography.subtitle2,
      fontWeight: 400,
      '&:focus': {
        outline: 'none',
      },
      '&:focus-within': {
        outline: 'none',
      },
    }),
    cellCheckbox: {
      width: 64,
    },
    columnHeaderCheckbox: {
      width: '64px !important',
    },
    virtualScroller: {
      '@supports (-moz-appearance:none)': {
        scrollbarWidth: 'thin',
        overflowY: 'hidden',
      },
    },

    sortIcon: ({ theme }) => ({
      color: theme.vars.palette.text.primary,
    }),
    selectedRowCount: { display: 'none' },
    footerContainer: ({ theme }) => ({
      backgroundColor: theme.vars.palette.background.elevation1,
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      border: 'none',
      [`& .${tablePaginationClasses.root}`]: {
        flex: 1,
      },
    }),
    filler: {
      height: 0,
      border: 'none',
    },
    toolbar: {
      borderBottomWidth: 0,
    },
  },
};

export default DataGrid;
