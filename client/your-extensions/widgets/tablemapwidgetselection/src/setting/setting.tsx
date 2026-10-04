import { React, Immutable, DataSourceTypes, type UseDataSource } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'

import {
  MapWidgetSelector,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'

import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'

export default function Setting(
  props: AllWidgetSettingProps<any>
) {
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds
    })
  }

  const onDataSourceSelected = (useDataSources: UseDataSource[]) => {
    props.onSettingChange({
      id: props.id,
      useDataSources
    })
  }

  function onToggleUseDataEnabled(useDataSourcesEnabled: boolean): void {
  }

  return (
    <div className="p-3">

      <SettingSection title="Map">
        <SettingRow>
          <MapWidgetSelector
            useMapWidgetIds={props.useMapWidgetIds}
            onSelect={onMapWidgetSelected}
          />
        </SettingRow>
      </SettingSection>

      <SettingSection title="Table Data">
        <SettingRow>
          <DataSourceSelector
            types={[DataSourceTypes.FeatureLayer] as any}
            useDataSources={props.useDataSources}
            useDataSourcesEnabled={props.useDataSourcesEnabled}
            onToggleUseDataEnabled={
              onToggleUseDataEnabled
            }
            onChange={onDataSourceSelected}
            widgetId={props.id}
          />
        </SettingRow>
      </SettingSection>

    </div>
  )
}