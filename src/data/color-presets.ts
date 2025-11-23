export interface PresetOption {
  value: string;
  label: string;
  preset: 'default' | 'luxury' | 'retro' | 'arctic' | 'nature';
  mode?: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    success: string;
    neutral: string;
  };
}

const lightPaletteMainColors = {
  primary: '#3385F0',
  secondary: '#A641FA',
  error: '#D02241',
  warning: '#F68D2A',
  success: '#099F69',
  neutral: '#1B2124',
} as const;

const darkPaletteMainColors = {
  primary: '#589BF3',
  secondary: '#B663FB',
  error: '#D84A63',
  warning: '#F8A250',
  success: '#35B084',
  neutral: '#C3D3DB',
} as const;

const corePresetOptions: PresetOption[] = [
  {
    value: 'default-light',
    label: 'Light',
    preset: 'default',
    mode: 'light',
    colors: lightPaletteMainColors,
  },
  {
    value: 'default-dark',
    label: 'Dark',
    preset: 'default',
    mode: 'dark',
    colors: darkPaletteMainColors,
  },
];

const luxuryPaletteMainColors = {
  primary: '#9E3B3B',
  secondary: '#9F6F3C',
  error: '#9F3C67',
  warning: '#9D933A',
  success: '#3A9E96',
  neutral: '#272424',
} as const;

const retroPaletteMainColors = {
  primary: '#4D6A8C',
  secondary: '#BF2A72',
  error: '#BE3240',
  warning: '#B1441B',
  success: '#427065',
  neutral: '#3B3A37',
} as const;

const arcticPaletteMainColors = {
  primary: '#017B8B',
  secondary: '#5E53B3',
  error: '#C44747',
  warning: '#95691E',
  success: '#2DA262',
  neutral: '#2F3534',
} as const;

const naturePaletteMainColors = {
  primary: '#308236',
  secondary: '#8E6E1A',
  error: '#BC4749',
  warning: '#AB5F1B',
  success: '#5B7D0D',
  neutral: '#63615A',
} as const;

const customPresetOptions: PresetOption[] = [
  {
    value: 'luxury',
    label: 'Luxury',
    preset: 'luxury',
    colors: luxuryPaletteMainColors,
  },
  {
    value: 'retro',
    label: 'Retro',
    preset: 'retro',
    colors: retroPaletteMainColors,
  },
  {
    value: 'arctic',
    label: 'Arctic',
    preset: 'arctic',
    colors: arcticPaletteMainColors,
  },
  {
    value: 'nature',
    label: 'Nature',
    preset: 'nature',
    colors: naturePaletteMainColors,
  },
];

export const presetOptions: PresetOption[] = [...corePresetOptions, ...customPresetOptions];
