import { PropsWithChildren, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Box, ClickAwayListener, Fade, Paper, Popper } from '@mui/material';
import SimpleBar from 'components/base/SimpleBar';

interface NavItemPopperProps {
  anchorEl: HTMLElement;
  handleClose: () => void;
  open: boolean;
  level: number;
  arrow?: boolean;
}

const NavItemPopper = ({
  anchorEl,
  handleClose,
  open,
  children,
  level,
  arrow,
}: PropsWithChildren<NavItemPopperProps>) => {
  const { pathname } = useLocation();

  const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null);

  useEffect(() => {
    handleClose();
  }, [pathname]);

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="right-start"
      transition
      sx={{
        zIndex: 1201,
      }}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, level === 0 ? 20 : 8],
          },
        },
        {
          name: 'arrow',
          enabled: arrow,
          options: {
            element: arrowRef,
          },
        },
      ]}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper
            variant="elevation"
            sx={(theme) => ({
              bgcolor: theme.vars.palette.background.menu,
              boxShadow: theme.vars.shadows[3],
              position: 'relative',
              borderRadius: 2,
            })}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <div>
                <SimpleBar sx={{ maxHeight: '80vh' }}>
                  <Box sx={{ p: 1, minWidth: 196 }}>
                    {children}
                    {arrow && <Box component="span" ref={setArrowRef} className="arrow" />}
                  </Box>
                </SimpleBar>
              </div>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default NavItemPopper;
