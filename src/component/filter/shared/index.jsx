import React from "react";

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 32 18"
  >
    <path d="M19.479 2l-7.479 12.543v5.924l-1-.6v-5.324l-7.479-12.543h15.958zm3.521-2h-23l9 15.094v5.906l5 3v-8.906l9-15.094z" />
  </svg>
);

const FilterButton = ({ handleBtn, isActive }) => (
  <button
    className={`common filter-button ${isActive ? "is-active" : ""}`}
    onClick={handleBtn}
  >
    <FilterIcon />
    Filters
  </button>
);

export { FilterIcon, FilterButton };