import {FC, useState} from 'react';

import SettingStore from '@client/stores/SettingStore';
import ToggleList from '@client/components/general/ToggleList';

import type {FloodSettings} from '@shared/types/FloodSettings';

interface MiscUISettingsListProps {
  onSettingsChange: (changedSettings: Partial<FloodSettings>) => void;
}

const MiscUISettingsList: FC<MiscUISettingsListProps> = ({onSettingsChange}: MiscUISettingsListProps) => {
  const [pageTitleSpeedEnabled, setPageTitleSpeedEnabled] = useState<FloodSettings['UIPageTitleSpeedEnabled']>(
    SettingStore.floodSettings.UIPageTitleSpeedEnabled,
  );

  const handlePageTitleSpeedToggle = () => {
    const nextValue = !pageTitleSpeedEnabled;
    setPageTitleSpeedEnabled(nextValue);
    onSettingsChange({UIPageTitleSpeedEnabled: nextValue});
  };
  return (
    <ToggleList
      items={[
        {
          label: 'settings.ui.page.title.speed',
          defaultChecked: pageTitleSpeedEnabled,
          onClick: handlePageTitleSpeedToggle,
        },
        {
          label: 'settings.ui.torrent.list.progress.percent',
          defaultChecked: changedTorrentListShowProgressPercentRef.current,
          onClick: () => {
            changedTorrentListShowProgressPercentRef.current = !changedTorrentListShowProgressPercentRef.current;
            onSettingsChange({
              torrentListShowProgressPercent: changedTorrentListShowProgressPercentRef.current,
            });
          },
        },
      ]}
    />
  );
};

export default MiscUISettingsList;
