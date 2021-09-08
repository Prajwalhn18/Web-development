import React from 'react'

export const IncomeExpense = () =>{
   
    return(
        <div className="expense-container">
        <div>
            <h4>Income</h4>
            <p className="money-plus">+0.00 Rs</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money-minus">-0.00 Rs</p>
        </div>
    </div>
    );
}