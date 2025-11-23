/* eslint-disable @typescript-eslint/no-empty-object-type */
import { PaletteOptions } from '@mui/material/styles';
import { cssVarRgba, generatePaletteChannel } from 'lib/utils';
import {
  basic,
  blue,
  grey as colorGrey,
  green,
  lightBlue,
  orange,
  purple,
  red,
} from 'theme/palette/colors';

export type PaletteColorKey =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'neutral';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

declare module '@mui/material/styles' {
  interface Color {
    950: string;
    '50Channel': string;
    '100Channel': string;
    '200Channel': string;
    '300Channel': string;
    '400Channel': string;
    '500Channel': string;
    '600Channel': string;
    '700Channel': string;
    '800Channel': string;
    '900Channel': string;
    '950Channel': string;
  }

  interface PaletteColor {
    lighter: string;
    darker: string;
  }

  interface SimplePaletteColorOptions extends Partial<PaletteColor> {}

  interface PaletteColorChannel {
    lighterChannel: string;
    darkerChannel: string;
  }

  interface Palette {
    neutral: PaletteColor;
    grey: Color;
    chGrey: Color;
    chRed: Color;
    chBlue: Color;
    chGreen: Color;
    chOrange: Color;
    chLightBlue: Color;
    dividerLight: string;
    menuDivider: string;
  }

  interface PaletteOptions extends DeepPartial<Palette> {}

  interface CssVarsPalette {
    neutral: PaletteColorChannel;
  }

  interface PaletteCommonChannel {
    blackChannel: string;
    whiteChannel: string;
  }

  interface PaletteTextChannel {
    disabledChannel: string;
  }

  interface PaletteActionChannel {
    disabledChannel: string;
    hoverChannel: string;
    focusChannel: string;
    disabledBackgroundChannel: string;
  }

  interface TypeBackground {
    elevation1: string;
    elevation2: string;
    elevation3: string;
    elevation4: string;
    menu: string;
    menuElevation1: string;
    menuElevation2: string;
    elevation1Channel: string;
    elevation2Channel: string;
    elevation3Channel: string;
    elevation4Channel: string;
    menuChannel: string;
    menuElevation1Channel: string;
    menuElevation2Channel: string;
  }

  interface ColorSystemOptions {
    shadows: string[];
  }
}

const common = generatePaletteChannel({ white: basic.white, black: basic.black });
const grey = generatePaletteChannel(colorGrey);

const primary = generatePaletteChannel({
  lighter: blue[50],
  light: blue[400],
  main: blue[500],
  dark: blue[600],
  darker: blue[900],
});
const secondary = generatePaletteChannel({
  lighter: purple[50],
  light: purple[300],
  main: purple[500],
  dark: purple[700],
  darker: purple[900],
});
const error = generatePaletteChannel({
  lighter: red[50],
  light: red[300],
  main: red[500],
  dark: red[600],
  darker: red[900],
});
const warning = generatePaletteChannel({
  lighter: orange[50],
  light: orange[400],
  main: orange[500],
  dark: orange[700],
  darker: orange[900],
  contrastText: common.white,
});
const success = generatePaletteChannel({
  lighter: green[50],
  light: green[400],
  main: green[500],
  dark: green[700],
  darker: green[900],
});
const info = generatePaletteChannel({
  lighter: lightBlue[50],
  light: lightBlue[300],
  main: lightBlue[500],
  dark: lightBlue[700],
  darker: lightBlue[900],
  contrastText: common.white,
});
const neutral = generatePaletteChannel({
  lighter: grey[100],
  light: grey[600],
  main: grey[800],
  dark: grey[900],
  darker: grey[950],
  contrastText: common.white,
});

const action = generatePaletteChannel({
  active: grey[500],
  hover: grey[100],
  selected: grey[100],
  disabled: grey[400],
  disabledBackground: grey[200],
  focus: grey[300],
});
const divider = grey[300];
const menuDivider = cssVarRgba(grey['700Channel'], 0);
const dividerLight = cssVarRgba(grey['300Channel'], 0.6);
const text = generatePaletteChannel({
  primary: grey[800],
  secondary: grey[600],
  disabled: grey[400],
});
const background = generatePaletteChannel({
  elevation1: grey[50],
  elevation2: grey[100],
  elevation3: grey[200],
  elevation4: grey[300],
  menu: basic.white,
  menuElevation1: grey[50],
  menuElevation2: grey[100],
});
const chGrey = grey;
const chRed = generatePaletteChannel(red);
const chBlue = generatePaletteChannel(blue);
const chGreen = generatePaletteChannel(green);
const chOrange = generatePaletteChannel(orange);
const chLightBlue = generatePaletteChannel(lightBlue);

export const paletteOptions: PaletteOptions = {
  common,
  grey,
  primary,
  secondary,
  error,
  warning,
  success,
  info,
  neutral,
  action,
  divider,
  dividerLight,
  menuDivider,
  text,
  background,
  chGrey,
  chRed,
  chBlue,
  chGreen,
  chOrange,
  chLightBlue,
};
