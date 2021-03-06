import React from "react";
import API from "./utils/API";
import "./App.css";
import ResultsList from "./components/resultsList";
import SearchForm from "./components/searchForm";

class App extends React.Component {
  state = {
    search: "",
    employeeList: [],
    filteredEmployees: [],
    sortedLastName: [],
  };

  componentDidMount() {
    this.searchUser();
  }

  searchUser = () => {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employeeList: res.data.results,
          filteredEmployees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value.trim();
    this.setState({
      search: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredEmployees = this.state.employeeList.filter((employee) => {
      return employee.name.last.includes(this.state.search);
    });
    this.setState({
      filteredEmployees: filteredEmployees,
    });
  };

  handleSortLastName = (event) => {
    event.preventDefault();
    console.log(this.state.employeeList);
    const sortedLastName = this.state.employeeList.sort((a, b) => {
      if (a.name.last > b.name.last) {
        return 1;
      } else if (b.name.last > a.name.last) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      sortedLastName: sortedLastName,
    });
  };

  render() {
    let toDisplay;

    if (this.state.filteredEmployees) {
      toDisplay = this.state.filteredEmployees;
    } else {
      toDisplay = this.state.employeeList;
    }

    return (
      <>
        <div className="App">
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            handleSortLastName={this.handleSortLastName}
          />
        </div>

        <div>
          <ResultsList results={toDisplay} />
        </div>
      </>
    );
  }
}

export default App;
