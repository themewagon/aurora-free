import { AvatarGroup, Badge, badgeClasses } from '@mui/material';
import { Avatar } from '@mui/material';
import { notificationBadge } from 'data/notifications';
import { Notification } from 'types/notification';
import IconifyIcon from 'components/base/IconifyIcon';

interface NotificationListItemAvatarProps {
  notification: Notification;
  variant?: 'default' | 'small';
}

const NotificationListItemAvatar = ({ notification, variant }: NotificationListItemAvatarProps) => {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        <Avatar
          sx={[
            {
              height: 24,
              width: 24,
              bgcolor: notificationBadge[notification.type].color,
            },
            variant === 'small' && {
              height: 16,
              width: 16,
            },
          ]}
        >
          <IconifyIcon
            icon={notificationBadge[notification.type].icon}
            sx={[
              { fontSize: notification.type === 'reaction_smile' ? 22 : 16 },
              variant === 'small' && { fontSize: notification.type === 'reaction_smile' ? 16 : 10 },
            ]}
          />
        </Avatar>
      }
      sx={{
        [`& .${badgeClasses.badge}`]: {
          height: 16,
          width: 16,
          minWidth: 'auto',
          zIndex: 2,
        },
      }}
    >
      <AvatarGroup max={2} sx={{ mr: 1.5 }}>
        {notification.user.slice(0, 2).map((user, index) => (
          <Avatar
            alt={user.name}
            src={user.avatar}
            key={user.id}
            sx={[
              { height: 56, width: 56 },
              notification.user.length > 1 &&
                index === 0 && {
                  mr: '-18px !important',
                },
              index === 1 && {
                mt: 2.25,
              },
              notification.user.length > 1 && {
                height: 38,
                width: 38,
              },
              variant === 'small' && {
                height: 40,
                width: 40,
              },
              notification.user.length > 1 &&
                variant === 'small' && {
                  height: 28,
                  width: 28,
                },
            ]}
          />
        ))}
      </AvatarGroup>
    </Badge>
  );
};

export default NotificationListItemAvatar;
