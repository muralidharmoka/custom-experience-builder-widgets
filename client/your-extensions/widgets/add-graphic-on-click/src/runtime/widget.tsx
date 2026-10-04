import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import type Point from 'esri/geometry/Point'
import Graphic from 'esri/Graphic'
import SimpleMarkerSymbol from 'esri/symbols/SimpleMarkerSymbol'

const { useState } = React

const Widget = (props: AllWidgetProps<any>) => {
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')

  const activeViewChangeHandler = (jmv: JimuMapView) => {
  if (jmv) {
    // When the pointer moves, take the pointer location and create a Point
    // Geometry out of it (`view.toMap(...)`), then update the state.
    jmv.view.on('pointer-move', (evt) => {
      const point: Point = jmv.view.toMap({
        x: evt.x,
        y: evt.y
      })
// Create the point symbol
      const symbol = new SimpleMarkerSymbol({
        style: 'circle',
        size: 12,
        color: 'red',
        outline: {
          color: 'white',
          width: 2
        }
      })

      // Create a Graphic
      const graphic = new Graphic({
        geometry: point,
        symbol: symbol
      })

      // Add the graphic to the map
      jmv.view.graphics.add(graphic)
    })
  }
}

return <div className="widget-starter jimu-widget">
  {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
    <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
  )}
  {/* *** ADD: *** */}
  <p>
    Lat/Lon: {latitude} {longitude}
  </p>
</div>

}

export default Widget
