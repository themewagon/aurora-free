import { Box, keyframes } from '@mui/material';

const moveRayAcross = keyframes`
  0% {
    left: 0;
    opacity: 0;
    transform: rotate(-20deg);
  }
  25% {
    opacity: 0.4;
  }
  50% {
    left: calc((100% - 56px) / 2);
    opacity: 1;
    transform: rotate(-20deg);
  }
  75% {
    opacity: 0.4;
  }
  100% {
    left: calc(100% - 56px);
    opacity: 0;
    transform: rotate(-20deg);
  }
`;

const LightRay = () => (
  <Box
    sx={{
      position: 'absolute',
      top: -65,
      left: 0,
      height: 158,
      width: 56,
      pointerEvents: 'none',
      willChange: 'left, opacity, transform',
      animation: `${moveRayAcross} 10s infinite 0s linear`,

      '&::after, &::before': {
        content: '""',
        position: 'absolute',
      },

      '&::after': {
        height: 154,
        width: 20,
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: 20,
        opacity: 1,
        background: `linear-gradient(1deg, transparent 0.15%, rgba(255, 255, 255, 1) 103.86%)`,
        mixBlendMode: 'plus-lighter',
        filter: 'blur(8px)',
      },

      '&:before': {
        bottom: 26,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 0,
        height: 1,
        width: 1,
        borderRadius: 54,
        mixBlendMode: 'plus-lighter',
        opacity: 1,
        bgcolor: 'success.main',
        filter: 'blur(30px)',
      },
    }}
  />
);

export default LightRay;
