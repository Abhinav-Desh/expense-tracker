const ExpenseFilter = ({ filter, setFilter }) => {
    
    const handleCategoryChange = (e) => {
      setFilter({ ...filter, category: e.target.value });
    };
  
    
    const handleDateChange = (start, end) => {
      setFilter({ ...filter, dateRange: [start, end] });  
    };
  
    return (
      <div className="expense-filter">
        
        <div className="filter-group">
          <label htmlFor="category" className="filter-label">Category:</label>
          <select
            id="category"
            value={filter.category}
            onChange={handleCategoryChange}
            className="filter-select"
          >
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
          </select>
        </div>
  
       
        <div className="filter-group">
          <label htmlFor="startDate" className="filter-label">Start Date:</label>
          <input
            id="startDate"
            type="date"
            value={filter.dateRange?.[0] || ""}
            onChange={(e) =>
              handleDateChange(e.target.value, filter.dateRange?.[1])
            }
            className="filter-input"
          />
  
          <label htmlFor="endDate" className="filter-label">End Date:</label>
          <input
            id="endDate"
            type="date"
            value={filter.dateRange?.[1] || ""}
            onChange={(e) =>
              handleDateChange(filter.dateRange?.[0], e.target.value)
            }
            className="filter-input"
          />
        </div>
      </div>
    );
  };
  
  export default ExpenseFilter;
  