import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

interface LinkBehaviorProps extends Omit<RouterLinkProps, 'to'> {
  href: RouterLinkProps['to'];
  ref?: React.Ref<HTMLAnchorElement>;
}

export const LinkBehavior = ({ ref, ...props }: LinkBehaviorProps) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
};

export const HashLinkBehavior = ({ ref, ...props }: LinkBehaviorProps) => {
  const { href, ...other } = props;
  return <HashLink smooth ref={ref} to={href} {...other} />;
};

const Link: Components<Omit<Theme, 'components'>>['MuiLink'] = {
  defaultProps: {
    component: LinkBehavior,
    underline: 'hover',
  },
  styleOverrides: {
    underlineHover: () => ({
      position: 'relative',
      backgroundImage: `linear-gradient(currentcolor, currentcolor)`,
      backgroundSize: '0% 1px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left bottom',
      transition: 'background-size 0.25s ease-in',
      '&:hover': {
        textDecoration: 'none',
        backgroundSize: '100% 1px',
      },
    }),
  },
};

export default Link;
