import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

import type Point from 'esri/geometry/Point'
import Graphic from 'esri/Graphic'
import SimpleMarkerSymbol from 'esri/symbols/SimpleMarkerSymbol'

const { useState, useRef } = React

export default function Widget(props: AllWidgetProps<any>) {
      const [latitude, setLatitude] = useState<string>('')
      const [longitude, setLongitude] = useState<string>('')

      const jimuMapViewRef = useRef<JimuMapView | null>(null)

      const activeViewChangeHandler = (jmv: JimuMapView) => {
        if (!jmv) {
          return
        }

        jimuMapViewRef.current = jmv
        console.log('Map connected')
      }

      const enableMapClick = () => {

        const jmv = jimuMapViewRef.current
        if (!jmv) {
          console.log('Map is not ready')
          return
        }

        jmv.view.on('click', (event) => {
          const point: Point = jmv.view.toMap({
            x: event.x,
            y: event.y
          }) as Point

          if (!point) {
            return
          }

          setLatitude(point.latitude.toFixed(6))
          setLongitude(point.longitude.toFixed(6))

          // Create the point symbol
          const symb = new SimpleMarkerSymbol({
            style: 'circle',
            size: 12,
            color: 'red',
            outline: {
              color: 'white',
              width: 2
            }
          })

          const graphic = new Graphic({
            geometry: point,
            symbol: symb
          })

          // Remove previous graphic
          jmv.view.graphics.removeAll()
          // Add new point
          jmv.view.graphics.add(graphic)
          console.log('Point added:', point)
        })
      }

      return (
        <div className="p-3">
          {
            props.useMapWidgetIds &&
            props.useMapWidgetIds.length === 1 && (
              <JimuMapViewComponent  useMapWidgetId={props.useMapWidgetIds[0]} onActiveViewChange={activeViewChangeHandler}
              />
            )
          }

          <button  className="btn btn-primary"  onClick={enableMapClick}      >
            Enable Map Click
          </button>

          <hr />

          <div>
            <strong>Latitude:</strong> {latitude}
          </div>

          <div>
            <strong>Longitude:</strong> {longitude}
          </div>

        </div>
      )
}