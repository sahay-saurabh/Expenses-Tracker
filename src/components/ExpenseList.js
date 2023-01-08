import './expenselist.css'
import ExpenseItem from './ExpenseItem'
import React from 'react'

function ExpenseList(props) {
    if (props.item.length === 0) return (<h2 className='expenses-list__fallback'>No items found.</h2>)
    return (
        <ul className='expenses-list'>
            {props.item.map((expense) => {
                return (
                    <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
                )
            })}
        </ul>
    )
}

export default ExpenseList