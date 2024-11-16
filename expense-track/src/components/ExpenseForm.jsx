// components to add new expenses

import { useState } from "react";

const ExpenseForm = ({onAddExpense})=>{
    const [description, setDescription] = useState("");// store the sentence that you write on input
    const [Amount,setAmount] = useState("");//store the amount
    const [date,setDate] = useState("");
    const [category,setCategory]=useState("");

    
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!description || !Amount || !date || !category){
            alert('please select all fields');
            return;
        }
        // store in the form of object
        const newExpense = {
            id:Date.now(),
            description,
            amount: parseFloat(Amount),
            date,
            category,
        };
        onAddExpense(newExpense);
        setDescription("");
        setAmount("");
        setDate("");
        setCategory("");
        
    }
return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Description:</label>
        <input type="text"
        placeholder="Description" 
        value={description}
        onChange={(e)=>setDescription(e.target.value)}/>
        <label>Amount:</label>
        <input type="text"
        placeholder="Amount"
        value={Amount}
        onChange={(e)=>setAmount(e.target.value)}
         />

         <label>Date</label>
         <input type="date"
         value={date}
         onChange={(e)=>setDate(e.target.value)} />

         <label htmlFor="">Category:</label>
         <select value={category} onChange={(e)=>setCategory(e.target.value)}>
         <option value="">Select Category</option>
         <option value="Food">Food</option>
         <option value="Transport">Transport</option>
         <option value="Bills">Bills</option>
        </select>
            <button type="submit">Add Expense</button>
    </form>
);
};

export default ExpenseForm;