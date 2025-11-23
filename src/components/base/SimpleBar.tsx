import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@mui/material';
import type { SimpleBarOptions } from 'simplebar-core';
import SimpleBarReact from 'simplebar-react';

export interface SimpleBarProps extends SimpleBarOptions {
  sx?: BoxProps['sx'];
  disableHorizontal?: boolean;
}

const SimpleBar = ({ disableHorizontal, sx, ...rest }: PropsWithChildren<SimpleBarProps>) => {
  return (
    <Box
      component={SimpleBarReact}
      autoHide
      {...rest}
      sx={[
        {
          height: 1,
          '& .simplebar-content': {
            height: 1,
          },
        },
        !!disableHorizontal && {
          '& .simplebar-horizontal': {
            display: 'none',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
};

export default SimpleBar;
