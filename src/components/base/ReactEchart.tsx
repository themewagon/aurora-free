import { useMemo } from 'react';
import { Box, BoxProps, useTheme } from '@mui/material';
import { EChartsReactProps } from 'echarts-for-react';
import { default as ReactEChartsCore } from 'echarts-for-react/lib/core';
import merge from 'lodash.merge';
import { grey } from 'theme/palette/colors';

export interface ReactEchartProps extends BoxProps {
  echarts: EChartsReactProps['echarts'];
  option: EChartsReactProps['option'];
}

const ReactEchart = ({ option, ref, ...rest }: ReactEchartProps) => {
  const theme = useTheme();

  const isTouchDevice = useMemo(() => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  const defaultTooltip = useMemo(
    () => ({
      padding: [7, 10],
      axisPointer: {
        type: 'none',
      },
      textStyle: {
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 400,
        fontSize: 12,
        color: theme.vars.palette.common.white,
      },
      backgroundColor: grey[800],
      borderWidth: 0,
      borderColor: theme.vars.palette.menuDivider,
      extraCssText: 'box-shadow: none;',
      transitionDuration: 0,
      confine: true,
      triggerOn: isTouchDevice ? 'click' : 'mousemove|click',
      ...theme.applyStyles('dark', {
        backgroundColor: grey[900],
        borderWidth: 1,
      }),
    }),
    [theme, option],
  );

  return (
    <Box
      component={ReactEChartsCore}
      ref={ref}
      option={{
        ...option,
        tooltip: merge(defaultTooltip, option.tooltip),
      }}
      {...rest}
    />
  );
};

export default ReactEchart;
