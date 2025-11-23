import { IconifyIcon, IconifyJSON, addCollection } from '@iconify/react';
import icons from 'lib/iconify/icon-datasets';

interface IconData extends IconifyIcon {
  body: string;
}

const isIconData = (obj: unknown): obj is IconData => {
  return typeof obj === 'object' && obj !== null && 'body' in obj;
};

const collections: IconifyJSON[] = Object.entries(
  Object.entries(icons).reduce<Record<string, Record<string, IconifyIcon>>>((acc, [key, value]) => {
    const [prefix, iconName] = key.split(':');
    if (!acc[prefix]) acc[prefix] = {};

    if (isIconData(value)) {
      acc[prefix][iconName] = value;
    } else {
      console.warn(`Invalid icon data for ${prefix}:${iconName}`);
    }

    return acc;
  }, {}),
).map(([prefix, icons]) => ({
  prefix,
  icons,
  width: prefix === 'twemoji' ? 36 : 24,
  height: prefix === 'twemoji' ? 36 : 24,
}));

export const allIconNames = Object.keys(icons);

export const registerIcons = () => {
  collections.forEach((collection) => addCollection(collection));
};
