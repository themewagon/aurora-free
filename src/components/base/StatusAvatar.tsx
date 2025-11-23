import { Avatar, AvatarProps, BadgeProps, badgeClasses } from '@mui/material';
import clsx from 'clsx';
import OutlinedBadge from 'components/styled/OutlinedBadge';

interface StatusAvatarProps extends AvatarProps {
  status: 'online' | 'offline';
}

const StatusAvatar = ({ status, ...rest }: StatusAvatarProps) => {
  return (
    <OutlinedBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      color={
        clsx({
          success: status === 'online',
          error: status === 'offline',
        }) as BadgeProps['color']
      }
      sx={{
        [`& .${badgeClasses.badge}`]: {
          height: 10,
          width: 10,
          borderRadius: '50%',
        },
      }}
    >
      <Avatar {...rest} />
    </OutlinedBadge>
  );
};

export default StatusAvatar;
