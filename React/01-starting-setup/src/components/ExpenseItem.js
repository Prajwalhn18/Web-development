import './ExpenseItem.css'
function ExpenseItem(props) {
  const expenseDate = new Date(2021,9,4);
  const expenseTitle = 'Washing Powder';
  const month = props.toLocaleString('en-US',{month:'long'});


  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div></div>
        <div></div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} Rs</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
