import { RefObject, useCallback, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';

const useToggleChartLegends = (chartRef: RefObject<EChartsReactCore | null>) => {
  const [legendState, setLegendState] = useState<Record<string, boolean>>({});

  const handleLegendToggle = useCallback(
    (legendName: string) => {
      chartRef.current?.getEchartsInstance().dispatchAction({
        type: 'legendToggleSelect',
        name: legendName,
      });

      setLegendState((prev) => ({
        ...prev,
        [legendName]: !prev[legendName],
      }));
    },
    [chartRef],
  );

  return { legendState, handleLegendToggle };
};

export default useToggleChartLegends;
