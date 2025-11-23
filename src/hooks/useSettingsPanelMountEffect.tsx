import { useEffect } from 'react';
import { Config } from 'config';
import { SettingsPanelConfig, useSettingsPanelContext } from 'providers/SettingsPanelProvider';

const useSettingsPanelMountEffect = (effects: Partial<SettingsPanelConfig>) => {
  const { settingsPanelConfig, setSettingsPanelConfig } = useSettingsPanelContext();

  useEffect(() => {
    setSettingsPanelConfig(effects);
    const undoEffects = Object.keys(effects).reduce((acc, effect) => {
      // @ts-ignore
      acc[effect] = settingsPanelConfig[effect as keyof Config];
      return acc;
    }, {} as Partial<SettingsPanelConfig>);
    return () => {
      setSettingsPanelConfig(undoEffects);
    };
  }, []);
};

export default useSettingsPanelMountEffect;
