import { Box, Button, ButtonOwnProps, SxProps } from '@mui/material';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import SearchTextField from './SearchTextField';

interface SearchBoxButtonProps extends ButtonOwnProps {
  type?: 'default' | 'slim';
}

interface SearchBoxProps {
  sx?: SxProps;
}

const SearchBox = ({ sx }: SearchBoxProps) => {
  return (
    <SearchTextField
      sx={sx}
      focused={false}
      slotProps={{
        input: {
          autoComplete: 'off',
          sx: {
            borderRadius: 5,
            border: 1,
            borderStyle: 'solid',
            borderColor: 'transparent',
          },
        },
      }}
    />
  );
};

export const SearchBoxButton = ({ type = 'default', sx, ...rest }: SearchBoxButtonProps) => {
  const { up } = useBreakpoints();
  const upSm = up('sm');

  return (
    <>
      {type === 'slim' && upSm ? (
        <Button
          className="search-box-button"
          color="neutral"
          size="small"
          variant="soft"
          startIcon={<IconifyIcon icon="material-symbols:search-rounded" sx={{ fontSize: 20 }} />}
          sx={{ borderRadius: 11, py: '5px', ...sx }}
          {...rest}
        >
          <Box sx={{ mb: 0.25 }} component="span">
            Search
          </Box>
        </Button>
      ) : (
        <Button
          className="search-box-button"
          color="neutral"
          shape="circle"
          variant="soft"
          size={type === 'slim' ? 'small' : 'medium'}
          sx={sx}
          {...rest}
        >
          <IconifyIcon
            icon="material-symbols:search-rounded"
            sx={[{ fontSize: 20 }, type === 'slim' && { fontSize: 18 }]}
          />
        </Button>
      )}
    </>
  );
};

export default SearchBox;
