import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Stack,
  SxProps,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Notification } from 'types/notification';
import Image from 'components/base/Image';
import NotificationActionMenu from './NotificationActionMenu';
import NotificationListItemAvatar from './NotificationListItemAvatar';

dayjs.extend(relativeTime);
interface NotificationListProps {
  title: string;
  notifications: Notification[];
  sx?: SxProps;
  variant?: 'default' | 'small';
  onItemClick?: () => void;
}

const NotificationList = ({
  title,
  notifications,
  sx,
  variant = 'default',
  onItemClick,
}: NotificationListProps) => {
  if (notifications.length > 0) {
    return (
      <List
        subheader={
          <ListSubheader
            component={Typography}
            variant="body2"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              lineHeight: 1.45,
              mb: 0.5,
              position: 'static',
              bgcolor: 'transparent',
            }}
          >
            {title}
          </ListSubheader>
        }
        sx={sx}
      >
        {notifications.map((notification) => (
          <ListItem
            key={notification.id}
            disablePadding
            secondaryAction={<NotificationActionMenu />}
            sx={{
              '& .MuiListItemSecondaryAction-root': {
                top: 16,
                transform: 'none',
              },
            }}
          >
            <ListItemButton
              href="#!"
              disableRipple
              onClick={onItemClick}
              sx={[
                {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  borderRadius: 0,
                  p: 2,
                  gap: 1,
                  '&:hover': {
                    bgcolor: 'background.menuElevation1',
                  },
                },
                variant === 'default' && {
                  borderRadius: 6,
                  '&:hover': {
                    bgcolor: 'background.elevation1',
                  },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
              ]}
            >
              <Stack
                sx={{
                  alignItems: 'flex-start',
                  gap: 1,
                  width: 1,
                }}
              >
                <Stack alignItems="center" spacing={1}>
                  <Box sx={{ width: 8, height: 1 }}>
                    {!notification.readAt && (
                      <Box
                        component="span"
                        sx={{
                          display: 'block',
                          height: 8,
                          width: 8,
                          bgcolor: 'error.main',
                          outline: 2,
                          outlineColor: 'background.paper',
                          borderRadius: '50%',
                        }}
                      />
                    )}
                  </Box>
                  <NotificationListItemAvatar notification={notification} variant={variant} />
                </Stack>
                <Box
                  sx={{
                    flex: 1,
                    ml: 1,
                    mt: 0.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineClamp: 2,
                    }}
                  >
                    {notification.detail}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    {dayjs(notification.createdAt).fromNow()}
                  </Typography>
                </Box>
              </Stack>
              {notification.images && (
                <Stack
                  sx={[
                    {
                      gap: 1,
                      ml: 12,
                    },
                    variant === 'small' && {
                      ml: 10,
                    },
                  ]}
                >
                  {notification.images.slice(0, 3).map((image) => (
                    <Image
                      src={image}
                      key={image}
                      height={80}
                      width={80}
                      sx={{ borderRadius: 2 }}
                    />
                  ))}
                </Stack>
              )}
              {['friend_request', 'group_invitation'].includes(notification.type) && (
                <Stack
                  sx={[
                    {
                      gap: 1,
                      ml: 12,
                      pointerEvents: 'auto',
                    },
                    variant === 'small' && {
                      ml: 10,
                    },
                  ]}
                >
                  <Button
                    variant="soft"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="soft"
                    color="neutral"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }
};

export default NotificationList;
