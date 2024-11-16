import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import ThemeToggle from './components/ThemeToggle';
function App() {
  const [expenses,setExpenses]= useState([]);// it stores the expenses
  const [filter, setFilter] = useState({category:"",dateRange:null})//filter with object
  const [isDarkMode,setIsDarkMode] = useState(false);
  
  return (
    
    <div className={isDarkMode ? "dark-mode":""}>
      <h1>Expense Tracker</h1>
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <ExpenseForm onAddExpense={(expense)=>setExpenses([...expenses,expense])} />
      <ExpenseFilter filter={filter} setFilter={setFilter}/>
    </div>
    
  );
}

export default App;
