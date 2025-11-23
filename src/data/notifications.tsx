import { Typography } from '@mui/material';
import { initialConfig } from 'config';
import dayjs from 'dayjs';
import { Notification } from 'types/notification';
import { users } from './users';

export const notificationBadge = {
  birthday: { color: 'warning.main', icon: 'material-symbols:cake-rounded' },
  friend_request: { color: 'success.main', icon: 'material-symbols:person-add-rounded' },
  commented: { color: 'primary.main', icon: 'material-symbols:mode-comment-rounded' },
  following: { color: 'primary.main', icon: 'material-symbols:person-add-rounded' },
  reaction_love: { color: 'error.light', icon: 'material-symbols-light:favorite-rounded' },
  reaction_smile: { color: 'transparent', icon: 'noto:grinning-face-with-smiling-eyes' },
  photos: { color: 'primary.main', icon: 'material-symbols:imagesmode-rounded' },
  group_invitation: { color: 'primary.main', icon: 'material-symbols:group-rounded' },
  tagged: { color: 'primary.main', icon: 'material-symbols:sell' },
};

export const notifications: Notification[] = [
  {
    id: 1,
    type: 'birthday',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Jolyon Wagg
        </Typography>{' '}
        and{' '}
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          1 other
        </Typography>{' '}
        friend have birthdays today. Wish them to celebrate together 🎉
      </>
    ),
    readAt: null,
    user: [users[6], users[15]],
    createdAt: dayjs().subtract(1, 'm').toDate(),
  },
  {
    id: 2,
    type: 'commented',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Bianca Castapheore
        </Typography>{' '}
        commented on your photo: “Snowy looks amazing here! 🐶”
      </>
    ),
    readAt: null,
    user: [users[6]],
    createdAt: dayjs().subtract(20, 'm').toDate(),
    images: [`${initialConfig.assetsDir}/images/notifications/1.webp`],
  },
  {
    id: 3,
    type: 'friend_request',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Nestor
        </Typography>{' '}
        sent you a friend request
      </>
    ),
    readAt: new Date(),
    user: [users[4]],
    createdAt: dayjs().subtract(2, 'h').toDate(),
  },
  {
    id: 4,
    type: 'following',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Cuthbert Calculus
        </Typography>{' '}
        started following you
      </>
    ),
    readAt: new Date(),
    user: [users[7]],
    createdAt: dayjs().subtract(3, 'm').toDate(),
  },
  {
    id: 5,
    type: 'reaction_love',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Irma
        </Typography>{' '}
        reacted to your post: “Happy birthday buddy! 🥳🥳🎂”
      </>
    ),
    readAt: new Date(),
    user: [users[15]],
    createdAt: dayjs().subtract(1, 'd').toDate(),
  },
  {
    id: 6,
    type: 'commented',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Irma
        </Typography>{' '}
        commented on your post:“Thank you!! 😄”
      </>
    ),
    readAt: new Date(),
    user: [users[15]],
    createdAt: dayjs().subtract(1, 'd').toDate(),
  },
  {
    id: 7,
    type: 'reaction_smile',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Thomson & Thompson
        </Typography>{' '}
        reacted to your photo
      </>
    ),
    readAt: new Date(),
    user: [users[1]],
    createdAt: dayjs().subtract(1, 'd').toDate(),
  },
  {
    id: 12,
    type: 'friend_request',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Fushiguro Megumi
        </Typography>{' '}
        sent you a friend request
      </>
    ),
    readAt: new Date(),
    user: [users[6]],
    createdAt: dayjs().subtract(1, 'd').toDate(),
  },
  {
    id: 8,
    type: 'photos',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          General Alcazar
        </Typography>{' '}
        added 6 new photos
      </>
    ),
    readAt: new Date(),
    user: [users[3]],
    createdAt: dayjs().subtract(2, 'd').toDate(),
  },
  {
    id: 9,
    type: 'group_invitation',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Jolyon Wagg
        </Typography>{' '}
        invited you to the join the group: Best comics
      </>
    ),
    readAt: new Date(),
    user: [users[15]],
    createdAt: dayjs().subtract(2, 'd').toDate(),
  },
  {
    id: 10,
    type: 'tagged',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Bianca Castapheore
        </Typography>{' '}
        tagged you in a post:“These are couple of photos from the last trip of our group”
      </>
    ),
    readAt: new Date(),
    user: [users[6]],
    createdAt: dayjs().subtract(2, 'd').toDate(),
  },
  {
    id: 11,
    type: 'reaction_smile',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Peggy Alcazar
        </Typography>{' '}
        reacted to your photo
      </>
    ),
    readAt: new Date(),
    user: [users[12]],
    images: [`${initialConfig.assetsDir}/images/notifications/1.webp`],
    createdAt: dayjs().subtract(3, 'd').toDate(),
  },
  {
    id: 13,
    type: 'friend_request',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Tsukumo Yuki
        </Typography>{' '}
        sent you a friend request
      </>
    ),
    readAt: new Date(),
    user: [users[10]],
    createdAt: dayjs().subtract(1, 'd').toDate(),
  },
];
