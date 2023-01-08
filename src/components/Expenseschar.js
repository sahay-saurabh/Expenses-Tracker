import React from 'react'
import Chart from './chart/Chart'
function Expenseschar(props) {
    const DataPoints = [
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0},
    ]
    // console.log(props.expenses[0]);
    for(var i=0;i<props.expenses.length;i++){
        console.log(props.expenses[i].value);
        const point = props.expenses[i].date.getMonth()
        DataPoints[point].value += props.expenses[i].amount
    }
  return (
    <Chart dataPoints={DataPoints}/>
  )
}

export default Expenseschar