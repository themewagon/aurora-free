import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Radio, { radioClasses } from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import { FontFamily, fontFamilies } from 'config';
import { kebabCase } from 'lib/utils';
import { useSettingsContext } from 'providers/SettingsProvider';
import IconifyIcon from 'components/base/IconifyIcon';

const FontFamilyTab = () => {
  const {
    config: { fontFamily },
    setConfig,
  } = useSettingsContext();

  const handleChange = (newValue: FontFamily) => {
    setConfig({
      fontFamily: newValue,
    });
  };

  return (
    <List dense disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 3 }}>
      {fontFamilies.map((font) => (
        <ListItemButton
          key={kebabCase(font)}
          selected={fontFamily === font}
          onClick={() => handleChange(font)}
          sx={{
            py: fontFamily === font ? 0.5 : 1,
            bgcolor: 'background.elevation1',
            '&:hover': { bgcolor: 'primary.lighter' },
            '&.Mui-selected': {
              bgcolor: (theme) => theme.vars.palette.primary.lighter,
              '&:hover': {
                bgcolor: (theme) => theme.vars.palette.primary.lighter,
              },
            },
            '&:last-child': {
              borderBottom: 'none',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 28 }}>
            <Radio
              checked={fontFamily === font}
              onChange={() => handleChange(font)}
              value={font}
              checkedIcon={
                <IconifyIcon
                  fontSize={24}
                  icon="material-symbols-light:check-circle"
                  sx={{ color: 'primary.main', fontSize: '24px !important' }}
                />
              }
              sx={{
                p: 0,
                ...(fontFamily === font && {
                  [`&.${radioClasses.root}`]: {
                    ml: -0.5,
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }),
              }}
            />
          </ListItemIcon>

          <ListItemText
            primary={
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ lineHeight: 0, fontFamily: font }}
              >
                {font}
              </Typography>
            }
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default FontFamilyTab;
