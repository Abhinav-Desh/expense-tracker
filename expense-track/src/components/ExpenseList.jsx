const ExpenseList = ({ expenses }) => {
    console.log("expenses-->",expenses);
    
    return (
      <div className="expense-list">
        <h2>Expenses List</h2>
        <ul>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <li key={expense.id}>
                {expense.description} - ₹{expense.amount} - {expense.date} ({expense.category})
              </li>
            ))
          ) : (
            <li>No expenses found</li>
          )}
        </ul>
      </div>
    );
  };
  
  export default ExpenseList;
  