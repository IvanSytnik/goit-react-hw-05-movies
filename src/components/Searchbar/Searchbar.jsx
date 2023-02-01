

const Searchbar= ({name, handleName, handleSubmit}) => {
    return(
    <form className="SearchForm" onSubmit={handleSubmit}>
        
        

        <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={name}
        onChange={handleName}
        />
        <button type="submit" className="SearchForm-button">
            Search
        </button>
    </form>
   )
    
} 

export default Searchbar;