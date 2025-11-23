import { useMemo } from 'react';
import { isSafari } from 'react-device-detect';
import { SxProps, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { tooltipFormatterList } from 'helpers/echart-utils';
import { cssVarRgba, getPastDates } from 'lib/utils';
import { useSettingsContext } from 'providers/SettingsProvider';
import { UserEngagementData } from 'types/dashboard';
import ReactEchart from 'components/base/ReactEchart';

echarts.use([TooltipComponent, GridComponent, LineChart, CanvasRenderer, LegendComponent]);

interface UserEngagementChartProps {
  sx: SxProps;
  data: UserEngagementData;
  activeTab: string;
  ref?: React.Ref<null | EChartsReactCore>;
}

const UserEngagementChart = ({ sx, data, activeTab, ref }: UserEngagementChartProps) => {
  const { vars, typography } = useTheme();
  const { getThemeColor } = useSettingsContext();
  const getFormattedValue = (value: number, isTooltip = false) => {
    if (activeTab === 'avg-session-time') {
      const minutes = Math.floor(value);
      const seconds = Math.round((value - minutes) * 60);

      return isTooltip ? `${minutes}m ${seconds}s` : `${minutes}m`;
    }

    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(1)}M`;
    }

    if (value >= 1_000) {
      return `${Math.round(value / 1_000)}K`;
    }

    return value.toString();
  };

  const getOptions = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: getThemeColor(vars.palette.dividerLight),
            type: 'solid',
          },
          z: 1,
        },
        formatter: (params: CallbackDataParams[]) => tooltipFormatterList(params, true),
        valueFormatter: (value: number) => getFormattedValue(value, true),
      },
      legend: {
        data: ['actualValue', 'projectedValue'],
        show: false,
      },
      xAxis: {
        show: false,
        type: 'category',
        boundaryGap: false,
        data: getPastDates(20).map((date) => {
          return dayjs(date).format('MMM DD');
        }),
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        axisLabel: {
          formatter: (value: number) => getFormattedValue(value, false),
          fontFamily: typography.fontFamily,
          fontSize: typography.caption.fontSize,
          color: getThemeColor(vars.palette.text.disabled),
          fontWeight: 700,
        },
        splitLine: {
          show: true,
          interval: 0,
          lineStyle: {
            color: getThemeColor(vars.palette.dividerLight),
          },
        },
      },
      series: [
        {
          name: 'Actual value',
          type: 'line',
          smooth: 0.08,
          data: data.actual,
          showSymbol: false,
          symbol: 'circle',
          lineStyle: {
            width: 2,
            color: getThemeColor(vars.palette.chBlue[300]),
          },
          itemStyle: {
            color: getThemeColor(vars.palette.chBlue[300]),
          },
          areaStyle: {
            color: cssVarRgba(getThemeColor(vars.palette.chBlue['500Channel']), 0.08),
          },
          emphasis: {
            disabled: true,
          },
        },
        {
          name: 'Projected value',
          type: 'line',
          smooth: 0.08,
          data: data.projected,
          showSymbol: false,
          symbol: 'circle',
          zlevel: 1,
          lineStyle: {
            width: 1,
            type: 'dashed',
            color: getThemeColor(vars.palette.chGreen[200]),
          },
          itemStyle: {
            color: getThemeColor(vars.palette.chGreen[300]),
          },
          emphasis: {
            lineStyle: {
              color: getThemeColor(vars.palette.chGreen[300]),
            },
            itemStyle: {
              color: getThemeColor(vars.palette.chGreen[300]),
            },
          },
        },
      ],
      grid: {
        left: isSafari ? 10 : 0,
        right: 4,
        top: 8,
        bottom: 0,
        outerBoundsMode: 'same',
        outerBoundsContain: 'axisLabel',
      },
    }),
    [vars.palette, getThemeColor, data],
  );

  return <ReactEchart ref={ref} echarts={echarts} option={getOptions} sx={sx} />;
};

export default UserEngagementChart;
