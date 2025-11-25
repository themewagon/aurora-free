import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, keyframes } from '@mui/material/styles';
import { storeLink } from 'lib/constants';
import { cssVarRgba } from 'lib/utils';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';

const proFeatures = [
  '10 customization options',
  '100+ pages',
  '12 pre-built apps',
  '6 months technical support',
] as const;

interface PromoCardProps extends BoxProps {
  showFeatures?: boolean;
  img: string;
  imgStyles?: SxProps<Theme>;
  title?: string;
  subTitle?: string;
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const PromoCard = ({
  showFeatures = true,
  img,
  imgStyles,
  title = 'Get More Features',
  subTitle = 'Starting at just',
  sx,
  ...rest
}: PromoCardProps) => {
  return (
    <Box
      sx={{
        p: '2px',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&::before': {
          content: '""',
          position: 'absolute',
          width: '250%',
          height: '250%',
          pointerEvents: 'none',
          transform: 'rotate(180deg)',
          animation: `${spin} 6s linear infinite`,
          backgroundImage: ({ vars }) =>
            `conic-gradient(transparent 0%, ${cssVarRgba(vars.palette.success.mainChannel, 1)} 25%, transparent 80%)`,
        },
      }}
    >
      <Box
        sx={({ vars }) => ({
          bgcolor: 'background.elevation1',
          p: 3,
          width: 1,
          borderRadius: 4,
          outline: 0,
          position: 'relative',
          overflow: 'hidden',

          ['&:after']: {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(
                120.77% 120.77% at 62.42% 14.25%,
                ${cssVarRgba(vars.palette.chGreen['50Channel'], 0)} 51.22%,
                ${cssVarRgba(vars.palette.chGreen['100Channel'], 0.48)} 69.8%
              ),
              radial-gradient(
                125.2% 221.14% at 103.41% -3.28%,
                ${cssVarRgba(vars.palette.background.elevation1Channel, 1)} 52.92%,
                ${cssVarRgba(vars.palette.chGreen['50Channel'], 0.48)} 67.23%,
                ${cssVarRgba(vars.palette.chGreen['100Channel'], 0.48)} 100%
              ),
              linear-gradient(
                309.91deg,
                ${cssVarRgba(vars.palette.chGreen['100Channel'], 0.02)} 0.61%,
                ${cssVarRgba(vars.palette.chGreen['200Channel'], 0.02)} 39.75%
              )
            `,
          },
          ...(sx as any),
        })}
        {...rest}
      >
        <Stack direction="column" gap={2} alignItems="center" position="relative" zIndex={10}>
          <Stack direction="column" alignItems="center" gap={0.5}>
            <Typography variant="subtitle1" fontWeight={700}>
              {title}
            </Typography>
            <Stack gap={1} alignItems="center">
              <Typography variant="caption" fontWeight={500} lineHeight={1.3} color="textPrimary">
                {subTitle}
              </Typography>
              <Typography component="strong" variant="subtitle2" color="success">
                $59
              </Typography>
            </Stack>
          </Stack>

          <Box component="figure" sx={{ m: 0, ...imgStyles }}>
            <Image alt="Aurora dashboard" src={img} sx={{ width: 1, height: 1 }} />
          </Box>

          {showFeatures && (
            <Stack direction="column" gap={0.25} alignSelf="flex-start">
              {proFeatures.map((feature, index) => (
                <Stack key={index} gap={0.4} alignItems="center">
                  <IconifyIcon
                    icon="material-symbols:check-rounded"
                    sx={{ fontSize: 16, color: 'success.main' }}
                  />
                  <Typography variant="caption" fontWeight={600} lineHeight={1.3}>
                    {feature}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          )}

          <Button href={storeLink} target="_blank" fullWidth variant="contained" color="neutral">
            Explore now
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PromoCard;
