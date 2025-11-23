import { useMemo } from 'react';
import { useGridApiContext, useGridRootProps } from '@mui/x-data-grid';
import CustomTablePaginationAction, {
  CustomTablePaginationActionProps,
} from './CustomTablePaginationAction';

export interface DataGridPaginationActionProps extends CustomTablePaginationActionProps {
  showAllHref?: string;
}

const DataGridPaginationAction = ({ showAllHref, ...rest }: DataGridPaginationActionProps) => {
  const { page, rowsPerPage, count } = rest;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();

  const defaultPageSize =
    rootProps.initialState?.pagination?.paginationModel?.pageSize || rowsPerPage;

  const isShowingAll = useMemo(() => rowsPerPage === count, [rowsPerPage, count]);

  return (
    <>
      <CustomTablePaginationAction
        onNextClick={() => apiRef.current.setPage(page + 1)}
        onPrevClick={() => apiRef.current.setPage(page - 1)}
        onShowAllClick={() => {
          if (showAllHref) return;
          if (isShowingAll) {
            apiRef.current.setPageSize(defaultPageSize);
          } else {
            apiRef.current.setPageSize(count);
          }
        }}
        showAllHref={showAllHref}
        {...rest}
      />
    </>
  );
};

export default DataGridPaginationAction;
