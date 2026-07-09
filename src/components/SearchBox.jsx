const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        type="search"
        placeholder="Search robots by name..."
        value={searchField}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
