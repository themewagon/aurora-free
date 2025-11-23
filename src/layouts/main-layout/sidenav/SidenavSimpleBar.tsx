import { PropsWithChildren } from 'react';
import SimpleBar, { SimpleBarProps } from 'components/base/SimpleBar';

const SidenavSimpleBar = ({ children, sx, ...props }: PropsWithChildren<SimpleBarProps>) => {
  return (
    <SimpleBar
      {...props}
      autoHide
      sx={{
        height: 1,
        '& .simplebar-track': {
          '&.simplebar-vertical': {
            '& .simplebar-scrollbar': {
              '&:before': {
                backgroundColor: 'chGrey.300',
              },
            },
          },
        },
        ...sx,
      }}
    >
      {children}
    </SimpleBar>
  );
};

export default SidenavSimpleBar;
