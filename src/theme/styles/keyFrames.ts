const keyFrames = () => ({
  '@keyframes linearLeftToRight': {
    '0%': {
      backgroundPosition: 'left 100%',
    },
    '100%': {
      backgroundPosition: 'right 100%',
    },
  },
  '@keyframes spin': {
    to: { transform: 'rotate(360deg)' },
  },
});

export default keyFrames;
