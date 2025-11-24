import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { storeLink } from 'lib/constants';
import { cssVarRgba } from 'lib/utils';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import LightRay from './LightRay';

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
      sx={({ vars }) => ({
        background: `radial-gradient(
            254.12% 171.73% at 103.41% -3.28%, 
            ${cssVarRgba(vars.palette.grey['950Channel'], 1)} 52.92%, 
            ${cssVarRgba(vars.palette.chGreen['950Channel'], 1)} 67.23%,
            ${cssVarRgba(vars.palette.chGreen['800Channel'], 1)} 100%)
          `,
        p: 3,
        borderRadius: 4,
        outline: 0,
        position: 'relative',
        overflow: 'hidden',
        ...(sx as any),
      })}
      {...rest}
    >
      <LightRay />

      <Stack direction="column" gap={2} alignItems="center">
        <Stack direction="column" alignItems="center" gap={0.5}>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{
              color: 'neutral.lighter',
            }}
          >
            {title}
          </Typography>
          <Stack gap={1} alignItems="center">
            <Typography
              variant="caption"
              fontWeight={500}
              lineHeight={1.3}
              sx={{ color: 'neutral.lighter' }}
            >
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
                  icon="material-symbols:check-circle-outline-rounded"
                  sx={{ fontSize: 16, color: 'success.main' }}
                />
                <Typography
                  variant="caption"
                  fontWeight={600}
                  lineHeight={1.3}
                  sx={{ color: 'neutral.lighter' }}
                >
                  {feature}
                </Typography>
              </Stack>
            ))}
          </Stack>
        )}

        <Button href={storeLink} target="_blank" fullWidth variant="soft" color="neutral">
          Explore now
        </Button>
      </Stack>
    </Box>
  );
};

export default PromoCard;
