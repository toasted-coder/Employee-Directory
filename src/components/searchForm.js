import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for employee by last name"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-success mt-4"
        >
          Search
        </button>{" "}
        <br />
        <button
          onClick={props.handleSortLastName}
          className="btn btn-primary mt-4"
        >
          Sort by last name
        </button>{" "}
        <br />
      </div>
    </form>
  );
}

export default SearchForm;
