const ExpenseFilter =({filter,setFilter})=>{
const handleCategoryChange = (e)=>{
    setFilter({...filter,category:e.target.value})
}
const handleDateChange = (start,end)=>{
 setFilter({...filter,dateRange:{start,end}})
}
return (
    <div>
        <select onChange= {handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
        </select>

        <input type="date"  
        onChange={(e)=>handleDateChange(e.target.value,filter.dateRange?.end)}/>
        <input type="date"
        onChange={(e)=>handleDateChange(filter.dateRange?.start,e.target.value)} />
    </div>
);
}
export default ExpenseFilter;