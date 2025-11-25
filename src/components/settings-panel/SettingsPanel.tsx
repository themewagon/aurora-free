import { PropsWithChildren } from 'react';
import { Box, Button, Stack, Toolbar, Typography, paperClasses } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { cssVarRgba } from 'lib/utils';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';
import { useSettingsContext } from 'providers/SettingsProvider';
import { RESET } from 'reducers/SettingsReducer';
import { blue, green } from 'theme/palette/colors';
import IconifyIcon from 'components/base/IconifyIcon';
import SimpleBar from 'components/base/SimpleBar';
import PromoCard from 'components/common/PromoCard';
import FontFamilyTab from './FontFamilyPanel';
import promo from '/assets/images/illustrations/4.webp';

const SettingsPanel = () => {
  const { configDispatch } = useSettingsContext();
  const {
    settingsPanelConfig: { openSettingPanel },
    setSettingsPanelConfig,
  } = useSettingsPanelContext();

  const handleReset = () => {
    configDispatch({
      type: RESET,
    });
  };

  return (
    <div>
      <Drawer
        open={openSettingPanel}
        anchor="right"
        onClose={() => {
          setSettingsPanelConfig({ openSettingPanel: false });
        }}
        sx={({ zIndex }) => ({
          zIndex: zIndex.tooltip + 1,
          [`& .${paperClasses.root}`]: {
            width: 313,
          },
        })}
      >
        <Toolbar
          sx={(theme) => ({
            background: `linear-gradient(90.42deg, ${blue[300]} 13.1%, ${green[400]} 143.31%)`,
            gap: 1,

            ...theme.applyStyles('dark', {
              background: `linear-gradient(90.42deg, ${blue[900]} 13.1%, ${green[600]} 143.31%)`,
            }),
          })}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              flex: 1,
            }}
          >
            Customize
          </Typography>
          <Button
            variant="soft"
            sx={({ vars }) => ({
              bgcolor: cssVarRgba(vars.palette.common.whiteChannel, 0.1),
              color: vars.palette.common.white,
            })}
            startIcon={<IconifyIcon icon="material-symbols:reset-settings-rounded" />}
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            variant="soft"
            sx={({ vars }) => ({
              bgcolor: cssVarRgba(vars.palette.common.whiteChannel, 0.1),
              color: vars.palette.common.white,
            })}
            shape="square"
            onClick={() => {
              setSettingsPanelConfig({
                openSettingPanel: false,
              });
            }}
          >
            <IconifyIcon icon="material-symbols:close-rounded" sx={{ fontSize: 20 }} />
          </Button>
        </Toolbar>
        <Box
          sx={{
            flex: 1,
            overflow: 'hidden',
          }}
        >
          <SimpleBar
            sx={{
              height: 1,
              '& .simplebar-mask': {
                zIndex: 'unset',
              },
            }}
            disableHorizontal
            autoHide={false}
          >
            <Stack direction="column" justifyContent="space-between" sx={{ height: 1 }}>
              <Box sx={{ p: 3 }}>
                <Stack
                  direction="column"
                  sx={{
                    gap: 5,
                  }}
                >
                  <Section title="Font Family">
                    <FontFamilyTab />
                  </Section>
                </Stack>
              </Box>
              <Box sx={{ p: 3 }}>
                <PromoCard
                  showFeatures={false}
                  title="All Advanced Features"
                  subTitle="Available at"
                  img={promo}
                  imgStyles={{ maxWidth: 80 }}
                />
              </Box>
            </Stack>
          </SimpleBar>
        </Box>
      </Drawer>
    </div>
  );
};

export default SettingsPanel;

const Section = ({
  title,
  disable,
  children,
}: PropsWithChildren<{ title: string; disable?: boolean }>) => {
  return (
    <Box
      sx={[
        !!disable && {
          pointerEvents: 'none',
          '& .SettingsItem': {
            '&:after': {
              bgcolor: 'unset',
            },
          },
        },
      ]}
    >
      <Typography
        variant="subtitle1"
        sx={[
          {
            fontWeight: 700,
            mb: 2,
          },
          !!disable && { mb: 1, color: 'text.disabled' },
        ]}
      >
        {title}
      </Typography>
      {disable && (
        <Stack sx={{ alignItems: 'center', gap: 0.5, mb: 2, color: 'info.main' }}>
          <IconifyIcon icon="material-symbols:info-outline" sx={{ fontSize: 16 }} />
          <Typography variant="subtitle2">Not available in this layout.</Typography>
        </Stack>
      )}
      <Box sx={[!!disable && { opacity: 0.4 }]}>{children}</Box>
    </Box>
  );
};
