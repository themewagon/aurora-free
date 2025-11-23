import { PaperProps, Theme, paperClasses } from '@mui/material';
import { Components } from '@mui/material/styles';
import { blue, grey } from 'theme/palette/colors';

declare module '@mui/material' {
  interface PaperPropsVariantOverrides {
    default: true;
  }

  interface PaperOwnProps {
    background?: 1 | 2 | 3 | 4 | 5;
  }
}

const backgrounds: { [key: number]: { [key: string]: string } } = {
  1: { light: grey[50], dark: grey[900] },
  2: { light: grey[100], dark: grey[800] },
  3: { light: grey[200], dark: grey[700] },
  4: { light: grey[300], dark: grey[600] },
  5: { light: blue[50], dark: blue[950] },
};

const backgroundVariants = Object.keys(backgrounds).map((background) => ({
  props: { background: Number(background) as PaperProps['background'] },
  style: ({ theme }: { theme: Theme }) => [
    theme.applyStyles('light', {
      [`&.${paperClasses.root}`]: {
        backgroundColor: backgrounds[Number(background)].light,
      },
    }),
    theme.applyStyles('dark', {
      [`&.${paperClasses.root}`]: {
        backgroundColor: backgrounds[Number(background)].dark,
      },
    }),
  ],
}));

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  variants: [
    {
      props: { variant: 'default' },
      style: ({ theme }) => ({
        border: 'none',
        outline: `1px solid ${theme.vars.palette.divider}`,
        borderRadius: 0,
      }),
    },
    ...backgroundVariants,
  ],
  defaultProps: {
    variant: 'default',
    elevation: 3,
  },
  styleOverrides: {
    elevation: ({ theme }) => ({
      backgroundColor: theme.vars.palette.background.menu,
      backgroundImage: 'none',
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: theme.vars.palette.menuDivider,
      ...theme.applyStyles('dark', {
        borderWidth: 1,
      }),
    }),
    rounded: {
      borderRadius: 8,
    },
  },
};

export default Paper;
