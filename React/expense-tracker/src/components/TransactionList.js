import React from 'react'

export const TransactionList = () =>{
    return(
        <div>
              <h3>History</h3>
        <ul className="list">
            <li className="plus">
                cash<span>100 Rs</span><button className="delete-btn"></button>
            </li>
            <li className="minus">
                cash<span>400 Rs</span><button className="delete-btn"></button>
            </li>
        </ul>
        </div>
    );
}