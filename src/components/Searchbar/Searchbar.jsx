import '../../index.css';

const Searchbar= ({name, handleName, handleSubmit}) => {
    return(
    <form className="search-form" onSubmit={handleSubmit}>
        
        
        <div class="search-form__input">
        <label for="inputSearch" class="search-form__label label-hidden">
                    Enter movie title to search
                </label>
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