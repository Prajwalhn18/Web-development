import React from 'react'

export const AddTransaction = () =>{
    return(
        <div>
        <h3>Add new transaction</h3>
        <form id="form">
            <div className="from-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" placeholder="Enter text"/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br/>(negative-expense,positive-income)</label>
                <input type="number" id="amount" placeholder="Enter the amount"/>
                <button class="btn">Add transaction</button>
            </div>
        </form>
    </div>
    );
}