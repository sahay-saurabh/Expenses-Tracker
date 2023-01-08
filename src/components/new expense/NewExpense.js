import React, { useState } from 'react'
import './newexpense.css'
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {
    const saveExpenseHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onNewExpense(expenseData)
        setEditing(false)

    }
    const [editing, setEditing] = useState(false)
    const editingHandler = () => {
        setEditing(true)
    }
    const cancelEditing = ()=>{setEditing(false)}
    return (
        <div className='new-expense'>
            {!editing && <button type='button' onClick={editingHandler}> Add New Expense</button>}
            {editing && <ExpenseForm onCancel={cancelEditing} onSaveForm={saveExpenseHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense