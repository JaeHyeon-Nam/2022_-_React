import React, { Component } from "react";

import { validateSearchString } from "./Utils/Helper";
import { Popup } from "./Popup";

import './styles/Search.scss';
import './styles/Styles.scss';



class Search extends Component {
  state = {
    searchValue: "",
    isValidSearch: "",
    searchError: "",
    searchList: []
  };

  handleChange = e => {
    const searchValue = e.currentTarget.value.trim();
    const { searchError } = this.state;

    this.setState({
      searchValue,
      searchError: searchValue ? searchError : ""
    });
  };
  isCourseExist = isValidSearch => {
    const { searchList } = this.state;
    const { course, dept } = isValidSearch;

    return (
      searchList &&
      searchList.length > 0 &&
      searchList.some(
        search => search.course === course && search.dept === dept
      )
    );
  };
  handleSubmit = e => {
    e.preventDefault();

    const { searchValue, searchList } = this.state;
    const isValidSearch = validateSearchString(searchValue);
    

    this.props.setPs((prevPs)=>[
      // ...prevPs,
      searchValue]);// ...prevPs 쓰면 이전거에 더 더해짐. 리스트가 생김 

    let newState = {
      isValidSearch,
      searchError:
        !isValidSearch && searchValue ? "" : ""
        // Error: Could not parse course
    };

    if (isValidSearch) {
      const isExists = this.isCourseExist(isValidSearch);
      let updatedSearchList = searchList;
      if (searchList.length < 1) {
        updatedSearchList = [{ ...isValidSearch }];
      } else {
        updatedSearchList = !isExists
          ? [...searchList, isValidSearch]
          : searchList;
      }
      newState = {
        ...newState,
        ...isValidSearch,
        searchList: updatedSearchList
      };
    }
    this.setState({ ...newState });
  };


  render() {
    const {
      isValidSearch,
      searchError,
      dept,
      course,
      semester,
      year,
      searchValue,
      searchList
    } = this.state;
    // console.log("Search List", searchList);
    return (
    <div className="SearchApp">
      <div className="search-wrapper">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label>Place</label>
            <input
              type="text"
              placeholder="Enter Place Name"
              onChange={this.handleChange}
              className={!isValidSearch && searchError ? "error" : ""}
            />
            {searchError && <div className="field-error">{searchError}</div>}
          </div>
          <div
            className={`form-field ${
              searchError ? "align-center" : "align-end"
            }`}
          >
            <button type="submit" 
            // disabled={!isValidSearch && !searchValue} 우선 버튼 항상 활성화
            >
              Find
            </button>
          </div>
        </form>
        {isValidSearch && (
          <Popup dept={dept} course={course} semester={semester} year={year} />
        )}
      </div>
      </div>
    );
  }
}

export default Search;
