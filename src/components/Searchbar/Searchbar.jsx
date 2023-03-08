import '../../index.css';

const Searchbar= ({name, handleName, handleSubmit}) => {
    return(
    <form className="search-form" onSubmit={handleSubmit}>
        
        
        <div class="search-form__input">
        
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
        </div>
    </form>
   )
    
} 

export default Searchbar;