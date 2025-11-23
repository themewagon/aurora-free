import { MouseEvent, useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Box, Collapse } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import ListItemText, { listItemTextClasses } from '@mui/material/ListItemText';
import { cssVarRgba } from 'lib/utils';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useSettingsContext } from 'providers/SettingsProvider';
import { COLLAPSE_NAVBAR } from 'reducers/SettingsReducer';
import { SubMenuItem } from 'routes/sitemap';
import IconifyIcon from 'components/base/IconifyIcon';
import { useNavContext } from '../NavProvider';
import NavItemPopper from './NavItemPopper';

interface NavItemProps {
  item: SubMenuItem;
  level: number;
}

interface NavItemCollapseProps {
  item: SubMenuItem;
  level: number;
}

const NavItem = ({ item, level }: NavItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [openPopperMenu, setOpenPopperMenu] = useState(false);
  const { pathname } = useLocation();
  const { setOpenItems, openItems, isNestedItemOpen } = useNavContext();
  const { currentBreakpoint, up } = useBreakpoints();
  const upLg = up('lg');
  const {
    config: { sidenavCollapsed, openNavbarDrawer },
    configDispatch,
    handleDrawerToggle,
  } = useSettingsContext();

  const hasNestedItems = useMemo(() => Object.prototype.hasOwnProperty.call(item, 'items'), [item]);

  const expandIcon = (
    <IconifyIcon
      icon="material-symbols:expand-more-rounded"
      className="expand-icon"
      sx={[
        {
          fontSize: 12,
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
        },
        openItems[level] === item.pathName && {
          transform: 'rotate(180deg)',
        },
        sidenavCollapsed && {
          transform: (theme) => (theme.direction === 'rtl' ? 'rotate(-270deg)' : 'rotate(270deg)'),
          position: 'absolute',
          right: 8,
        },
      ]}
    />
  );

  const toggleCollapseItem = () => {
    if (!hasNestedItems) {
      if (openNavbarDrawer) {
        handleDrawerToggle();
      } else if (!upLg && !sidenavCollapsed) {
        configDispatch({ type: COLLAPSE_NAVBAR });
      }
      return;
    }

    if (!sidenavCollapsed) {
      if (hasNestedItems) {
        if (openItems[level] === item.pathName) {
          setOpenItems(openItems.slice(0, level));
        } else {
          const updatedOpenItems = [...openItems];
          updatedOpenItems[level] = item.pathName;
          setOpenItems(updatedOpenItems);
        }
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenPopperMenu(false);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenPopperMenu(true);
  };

  useEffect(() => {
    if (isNestedItemOpen(item.items)) {
      setOpenItems((prev) => {
        const updatedOpenItems = [...prev];
        updatedOpenItems[level] = item.pathName;
        return updatedOpenItems;
      });
    }
  }, [currentBreakpoint]);

  return (
    <>
      <ListItem key={item.pathName} disablePadding>
        <ListItemButton
          component={item.items ? 'div' : NavLink}
          to={item.path}
          onClick={toggleCollapseItem}
          target={item.target ? item.target : undefined}
          onMouseEnter={sidenavCollapsed ? handleMouseEnter : undefined}
          onMouseLeave={sidenavCollapsed ? handleClose : undefined}
          aria-expanded={openPopperMenu}
          selected={
            pathname === item.path ||
            (item.selectionPrefix && pathname!.includes(item.selectionPrefix)) ||
            (sidenavCollapsed && isNestedItemOpen(item.items)) ||
            (openItems[level] !== item.pathName && isNestedItemOpen(item.items))
          }
          sx={[
            (theme) => ({
              p: theme.spacing('3.5px', 2),
              '&.Mui-selected': {
                [`& .${listItemTextClasses.primary}`]: {
                  color: 'primary.main',
                },
              },
            }),
            !item.active && {
              [`& .${listItemTextClasses.primary}`]: {
                color: 'text.disabled',
              },
              [`& .${listItemIconClasses.root}`]: {
                color: 'text.disabled',
              },
            },
            sidenavCollapsed && {
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'center',
              p: 1,
            },
            (!sidenavCollapsed || level !== 0) && {
              minWidth: 180,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'left',
            },
            openPopperMenu && {
              backgroundColor: ({ vars }) =>
                level === 0 ? cssVarRgba(vars.palette.primary.mainChannel, 0.36) : 'action.hover',
            },
          ]}
        >
          {item.icon && (
            <ListItemIcon
              sx={{
                '& .iconify': {
                  fontSize: sidenavCollapsed ? 24 : 14,
                },
              }}
            >
              <IconifyIcon icon={item.icon} sx={item.iconSx} />
            </ListItemIcon>
          )}

          <Box
            sx={[
              {
                flex: 1,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
              level === 0 &&
                sidenavCollapsed && {
                  px: 1,
                },
            ]}
          >
            <ListItemText
              sx={[
                {
                  [`& .${listItemTextClasses.primary}`]: {
                    typography: 'caption',
                    fontWeight: 'medium',
                    whiteSpace: 'nowrap',
                    lineHeight: 1.3,
                    color: level === 0 ? 'text.primary' : 'text.secondary',
                  },
                },
                sidenavCollapsed && {
                  [`& .${listItemTextClasses.primary}`]: {
                    lineClamp: 1,
                    wordBreak: 'break-all',
                    whiteSpace: 'normal',
                  },
                },
              ]}
            >
              {item.name}
            </ListItemText>
            {hasNestedItems && expandIcon}
          </Box>
          {hasNestedItems && sidenavCollapsed && (
            <NavItemPopper
              handleClose={handleClose}
              anchorEl={anchorEl as HTMLElement}
              open={!!anchorEl && openPopperMenu}
              level={level + 1}
            >
              <List
                dense
                disablePadding
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                {item.items!.map((nestedItem) => (
                  <NavItem key={nestedItem.pathName} item={nestedItem} level={level + 1} />
                ))}
              </List>
            </NavItemPopper>
          )}
        </ListItemButton>
      </ListItem>

      {hasNestedItems && !sidenavCollapsed && <NavItemCollapse item={item} level={level} />}
    </>
  );
};

export default NavItem;

const NavItemCollapse = ({ item, level }: NavItemCollapseProps) => {
  const { openItems } = useNavContext();

  return (
    <Collapse in={openItems[level] === item.pathName} timeout="auto" unmountOnExit>
      <List
        dense
        disablePadding
        sx={{ pl: level === 0 ? 4 : 2, display: 'flex', flexDirection: 'column', gap: '2px' }}
      >
        {item.items!.map((nestedItem) => (
          <NavItem key={nestedItem.pathName} item={nestedItem} level={level + 1} />
        ))}
      </List>
    </Collapse>
  );
};
