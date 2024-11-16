const ThemeToggle = ({isDarkMode,setIsDarkMode})=>{
return (
    <button onClick={()=>setIsDarkMode(!isDarkMode)}>
        {isDarkMode?"Switch to Light Mode":"Switch to Dark Mode"}
    </button>
);
}
export default ThemeToggle;