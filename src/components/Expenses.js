import React, { useState } from 'react'
import './expenses.css'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import Expenseschar from './Expenseschar'
function Expenses(props) {
    
    const [filter,setFilter] = useState('2020')
    const expenseFilterHandler = (filter)=>{
        setFilter(filter)
    }
    const filteredExpenses = props.item.filter((expense)=>{
        return expense.date.getFullYear().toString() === filter
    })
 
    return (
        <li>
            <Card className='expenses'>
                <ExpenseFilter selected={filter} onExpenseFilter={expenseFilterHandler} />
                <Expenseschar expenses={filteredExpenses}></Expenseschar>
                <ExpenseList item={filteredExpenses} />
                
            </Card>
        </li>
    )
}

export default Expenses