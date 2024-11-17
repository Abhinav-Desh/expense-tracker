import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState(""); // store the description
  const [amount, setAmount] = useState(""); // store the amount
  const [date, setDate] = useState(""); // store the date
  const [category, setCategory] = useState(""); // store the category

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: check if all fields are filled
    if (!description || !amount || !date || !category) {
        alert('Please fill in all fields');
        return;
    }

    // Validate amount is a positive number
    if (parseFloat(amount) <= 0) {
      alert('Amount must be a positive number');
      return;
    }

    const newExpense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        date,
        category: category || "Uncategorized", // Fallback category
    };

    // Pass the new expense to the parent component
    onAddExpense(newExpense);
    
    // Reset the form after submission
    setDescription("");
    setAmount("");
    setDate("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      {/* Description Input */}
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
        />
      </div>

      {/* Amount Input */}
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="any"
          className="form-input"
        />
      </div>

      {/* Date Input */}
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-input"
        />
      </div>

      {/* Category Select */}
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-button">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
