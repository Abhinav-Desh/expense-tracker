const ExpenseSummary = ({ totalExpenses }) => {
    const validTotalExpenses = isNaN(totalExpenses) ? 0 : totalExpenses;
  
    return (
      <div className="expense-summary">
        <h2 className="total-expenses">
          Total Expenses: Rs {validTotalExpenses.toFixed(2)}
        </h2>
      </div>
    );
  };
  
  export default ExpenseSummary;
  