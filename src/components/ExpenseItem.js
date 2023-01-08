import React from 'react'
import ExpenseDate from './ExpenseDate'
import './expenseitem.css'
import Card from './Card'
function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'><h2>{props.title}</h2></div>
            <div className='expense-item__price'>${props.amount}</div>
        </Card>
    )
}

export default ExpenseItem