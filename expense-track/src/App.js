import { useEffect, useState, useCallback } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import ThemeToggle from './components/ThemeToggle';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';

function App() {
  const [expenses, setExpenses] = useState([]); // stores the expenses
  const [filter, setFilter] = useState({ category: "", dateRange: null }); // filter by default all
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTotalExpenses, setShowTotalExpenses] = useState(0);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    console.log("saved-->",savedExpenses);
    // Ensure all items in the expenses array have valid 'category' and are not undefined
    // const validExpenses = savedExpenses.filter((expense) => expense && expense.category);
    console.log(savedExpenses);
    setExpenses(savedExpenses);
  }, []);

  // Save expenses to localStorage whenever the expenses list changes
  // useEffect(() => {

  // }, [expenses]);

  // Calculate total expenses and update state
  useEffect(() => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    setShowTotalExpenses(total);
  }, [expenses]);

  // Filter expenses based on category and date range
  const filteredExpenses = expenses.filter((expense) => {
    // Ensure expense is not undefined and has a valid category
    if (!expense || !expense.category) return false;

    // Filter by category
    const categoryMatch = filter.category ? expense.category === filter.category : true;

    // Filter by date range (if provided)
    let dateMatch = true;
    if (filter.dateRange && Array.isArray(filter.dateRange)) {
      const expenseDate = new Date(expense.date);
      const [startDate, endDate] = filter.dateRange;

      // Ensure date comparison works as expected
      dateMatch = expenseDate >= new Date(startDate) && expenseDate <= new Date(endDate);
    }

    return categoryMatch && dateMatch;
  });

  // Handle adding a new expense with a callback to avoid unnecessary re-renders
  const handleAddExpense = useCallback((expense) => {

    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    localStorage.setItem('expenses', JSON.stringify([...expenses, expense]))
  }, []);


  // Handle filter change with a callback
  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);


  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <h1>Expense Tracker</h1>
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseFilter filter={filter} setFilter={handleFilterChange} />
      <ExpenseSummary totalExpenses={showTotalExpenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
