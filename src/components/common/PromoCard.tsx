import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { storeLink } from 'lib/constants';
import { cssVarRgba } from 'lib/utils';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';

const proFeatures = ['Flexible customization', 'More pages', 'More apps', 'Quick support'];

interface PromoCardProps extends BoxProps {
  showFeatures?: boolean;
  img: string;
  imgStyles?: SxProps<Theme>;
  title?: string;
  subTitle?: string;
}

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
      className="promo-card"
      sx={(theme) => {
        const palette = theme.vars.palette['chGreen'];
        const bg = theme.vars.palette.background;
        return {
          background: `
          radial-gradient(
            120.77% 120.77% at 62.42% 14.25%,
            ${cssVarRgba(palette['50Channel'], 0)} 51.22%,
            ${cssVarRgba(palette['100Channel'], 0.48)} 69.8%
          ),
          radial-gradient(
            125.2% 221.14% at 103.41% -3.28%,
            ${cssVarRgba(bg.elevation1Channel, 1)} 52.92%,
            ${cssVarRgba(palette['50Channel'], 0.48)} 67.23%,
            ${cssVarRgba(palette['100Channel'], 0.48)} 100%
          ),
          linear-gradient(
            309.91deg,
            ${cssVarRgba(palette['100Channel'], 0.02)} 0.61%,
            ${cssVarRgba(palette['200Channel'], 0.02)} 39.75%
          )
        `,
          p: 3,
          borderRadius: 4,
          outline: 0,
          position: 'relative',
          ...(sx as any),
        };
      }}
      {...rest}
    >
      <Stack direction="column" gap={2} alignItems="center">
        <Stack direction="column" alignItems="center" gap={0.5}>
          <Typography variant="subtitle1" fontWeight={700}>
            {title}
          </Typography>
          <Stack gap={1} alignItems="center">
            <Typography variant="caption" fontWeight={500} lineHeight={1.3}>
              {subTitle}
            </Typography>
            <Typography component="strong" variant="subtitle2" fontWeight={700} color="success">
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
                  icon="material-symbols:check"
                  sx={{ fontSize: 16, color: 'success.main' }}
                />
                <Typography variant="caption" fontWeight={600}>
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
  );
};

export default PromoCard;
