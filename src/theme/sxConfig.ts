export default {
  lineClamp: {
    style: (props: { lineClamp: number }) => ({
      display: '-webkit-box',
      WebkitLineClamp: String(props.lineClamp),
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    }),
  },
};
