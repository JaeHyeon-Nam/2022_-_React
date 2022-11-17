import React from "react";
import FiltersBox from "./filters-box";
import FilterSearch from "./search";

import { FilterButton } from "./shared";

const FiltersActive = ({ filters }) => (
  <aside className="active-filters">
    <p>Active Filters: {""}</p>
    {filters.map(el => (
      <span key={el}>{el}</span>
    ))}
  </aside>
);

class Filters extends React.Component {
  state = {
    showFilters: false,
    filtersList: {
      ONLY_HSF: true,
      ALL_IDX: false,
      FOR_SALE: true,
      RECENTLY_SOLD: false,
      FOR_RENT: false
    },
    activeFilters: []
  };

  handleBtn = () => {
    this.setState({ showFilters: !this.state.showFilters });
  };

  getActiveFilters = arr => {
    const keys = Object.keys(arr);

    const activeFilters = keys.map(el => {
      const isTrue = arr[el] === true;
      const hasValue = typeof arr[el] === "string" && arr[el].trim();

      if (isTrue) return el;
      if (hasValue) return `Agent - ${arr[el]}`;
    });

    return activeFilters
      .filter(el => el !== undefined)
      .map(el =>
        el
          .replace("FOR_", " ")
          .replace("RECENTLY", "")
          .replace("_", " ")
          .toLowerCase()
      );
  };

  updateActiveFilters = () => {
    const activeFilters = this.getActiveFilters(this.state.filtersList);
    this.setState({ activeFilters });
  };

  handleFilters = evt => {
    const { id, checked } = evt.target;
    const { filtersList } = this.state;

    let key = {};

    if (id === "ONLY_HSF") {
      key = { ALL_IDX: !checked };
    } else if (id === "ALL_IDX") {
      key = { ONLY_HSF: !checked };
    }

    const newState = {
      ...filtersList,
      ...key,
      [id]: checked
    };

    this.setState({ filtersList: newState }, () => {
      this.updateActiveFilters();
    });
  };

  handleAgentChange = obj => {
    const newState = {
      ...this.state.filtersList,
      ...obj
    };

    this.setState({ filtersList: newState }, () => {
      this.updateActiveFilters();
    });
  };

  componentDidMount() {
    this.updateActiveFilters();
  }

  render() {
    const { showFilters, filtersList, activeFilters } = this.state;

    return (
      <React.Fragment>
        <section className="filter-controls">
          <FilterSearch />
          <p></p>
          <FilterButton handleBtn={this.handleBtn} 
          // isActive={showFilters} 
          />
        </section>

        {/* {showFilters && (
          <FiltersBox
            filters={filtersList}
            handleAgentChange={this.handleAgentChange}
            handleFilters={this.handleFilters}
          />
        )} */}

        {/* {activeFilters && activeFilters.length > 0 && (
          <FiltersActive filters={activeFilters} />
        )} */}
      </React.Fragment>
    );
  }
}

export default Filters;
