import { MouseEvent, useMemo } from 'react';
import {
  Box,
  Button,
  Link,
  Pagination,
  Stack,
  TablePaginationOwnProps,
  buttonClasses,
} from '@mui/material';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import IconifyIcon from 'components/base/IconifyIcon';

export interface CustomTablePaginationActionProps extends TablePaginationOwnProps {
  onNextClick?: () => void;
  onPrevClick?: () => void;
  onShowAllClick?: () => void;
  showAllHref?: string;
  showFullPagination?: boolean;
}

const CustomTablePaginationAction = ({
  page,
  rowsPerPage,
  count,
  onPageChange,
  onShowAllClick,
  onNextClick,
  onPrevClick,
  showAllHref,
  showFullPagination,
}: CustomTablePaginationActionProps) => {
  const isShowingAll = useMemo(() => rowsPerPage === count, [rowsPerPage, count]);
  const { up } = useBreakpoints();

  const upSm = up('sm');
  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        ml: {
          sm: 1,
        },
      }}
    >
      <Link
        variant="caption"
        href={showAllHref}
        onClick={onShowAllClick}
        sx={{ fontWeight: 700, flexShrink: 0, mt: { sm: 0.5 } }}
      >
        {isShowingAll ? 'View less' : 'Show all'}
      </Link>

      {showFullPagination ? (
        <Pagination
          color="primary"
          variant="solid"
          showFirstButton={upSm}
          showLastButton={upSm}
          count={Math.ceil(count / rowsPerPage)}
          page={page + 1}
          onChange={(event: MouseEvent<HTMLButtonElement>, page: number) =>
            onPageChange(event, page - 1)
          }
          sx={{ flexShrink: 0 }}
        />
      ) : (
        <>
          <Button
            variant="text"
            color="primary"
            size="small"
            startIcon={
              <IconifyIcon
                flipOnRTL
                icon="material-symbols:chevron-left-rounded"
                sx={{ fontSize: '18px !important' }}
              />
            }
            disabled={page === 0}
            onClick={onPrevClick}
            sx={{
              ml: 'auto',
              minWidth: 'auto',
              [`& .${buttonClasses.startIcon}`]: {
                mr: { xs: 0, sm: 0.5 },
              },
            }}
          >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
              Previous
            </Box>
          </Button>
          <Button
            disabled={(page + 1) * rowsPerPage >= count}
            onClick={onNextClick}
            variant="text"
            color="primary"
            size="small"
            endIcon={
              <IconifyIcon
                flipOnRTL
                icon="material-symbols:chevron-right-rounded"
                sx={{ fontSize: '18px !important' }}
              />
            }
            sx={{
              minWidth: 'auto',
              [`& .${buttonClasses.endIcon}`]: {
                ml: { xs: 0, sm: 0.5 },
              },
            }}
          >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
              Next
            </Box>
          </Button>
        </>
      )}
    </Stack>
  );
};

export default CustomTablePaginationAction;
