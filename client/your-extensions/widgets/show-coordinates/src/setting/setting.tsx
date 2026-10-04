import type { AllWidgetSettingProps } from 'jimu-for-builder'
import {  MapWidgetSelector} from 'jimu-ui/advanced/setting-components'

export default function Setting(
  props: AllWidgetSettingProps<any>
) {

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds
    })
  }

  return (
    <div className="p-3">
      <h4>Map Settings</h4>
      <p>Select a Map widget:</p>

      <MapWidgetSelector
        useMapWidgetIds={props.useMapWidgetIds}
        onSelect={onMapWidgetSelected}
      />

    </div>
  )
}