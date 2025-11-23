import { PropsWithChildren, createContext, use, useState } from 'react';

export interface SettingsPanelConfig {
  showSettingPanelButton: boolean;
  openSettingPanel: boolean;
}

interface SettingsPanelContextInterFace {
  settingsPanelConfig: SettingsPanelConfig;
  setSettingsPanelConfig: (config: Partial<SettingsPanelConfig>) => void;
}

export const SettingsPanelContext = createContext({} as SettingsPanelContextInterFace);

const SettingsPanelProvider = ({ children }: PropsWithChildren) => {
  const [settingsPanelConfig, setSettingsPanelConfig] = useState<SettingsPanelConfig>({
    showSettingPanelButton: true,
    openSettingPanel: false,
  });

  const updateSettingsPanelConfig = (config: Partial<SettingsPanelConfig>) => {
    setSettingsPanelConfig({
      ...settingsPanelConfig,
      ...config,
    });
  };

  return (
    <SettingsPanelContext
      value={{
        settingsPanelConfig,
        setSettingsPanelConfig: updateSettingsPanelConfig,
      }}
    >
      {children}
    </SettingsPanelContext>
  );
};

export default SettingsPanelProvider;

export const useSettingsPanelContext = () => use(SettingsPanelContext);
