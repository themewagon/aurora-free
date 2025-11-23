import { ImgHTMLAttributes } from 'react';
import { Box, BoxProps } from '@mui/material';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  sx?: BoxProps['sx'];
  src?: string;
}

const Image = ({ src, ...props }: ImageProps) => {
  return <Box component="img" src={src} {...props} />;
};

export default Image;
