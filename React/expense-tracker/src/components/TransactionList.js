import React from 'react'

export const TransactionList = () =>{
    return(
        <div>
              <h3>History</h3>
        <ul id="list" class="list">
            <li class="plus">
                cash<span>100 Rs</span><button class="delete-btn"></button>
            </li>
            <li class="minus">
                cash<span>400 Rs</span><button class="delete-btn"></button>
            </li>
        </ul>
        </div>
    );
}