import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

const Typography: Components<Omit<Theme, 'components'>>['MuiTypography'] = {
  defaultProps: {
    variantMapping: {
      subtitle2: 'p',
    },
  },
};

export default Typography;
