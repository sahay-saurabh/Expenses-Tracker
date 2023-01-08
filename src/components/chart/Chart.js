import React from 'react'
import Chartbar from './Chartbar'
import './chart.css'
function Chart(props) {
    const dataValue = props.dataPoints.map(data=>data.value)
    const maxvalue = Math.max(...dataValue)
  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint=><Chartbar key={dataPoint.label} value={dataPoint.value} maxValue={maxvalue} label={dataPoint.label} />)}
    </div>
  )
}

export default Chart