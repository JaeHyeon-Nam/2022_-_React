import React from "react";
// import AgentFilter from "./agent-filter/input";

const Field = ({
  type = "checkbox",
  name = null,
  id,
  label,
  value,
  onChange
}) => (
  <fieldset>
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      checked={value}
      onChange={onChange}
    />

    <label htmlFor={id}>{label}</label>
  </fieldset>
);

const FiltersBox = ({ handleFilters, filters, handleAgentChange }) => (
  <section className="filter-options">
    <div className="filterType">
      <legend>Franchisee Filters</legend>
      <Field
        id="ONLY_HSF"
        type="radio"
        name="franchisee-filter"
        value={filters.ONLY_HSF}
        label="Only HSF listings"
        onChange={handleFilters}
      />
      <Field
        id="ALL_IDX"
        type="radio"
        name="franchisee-filter"
        value={filters.ALL_IDX}
        label="ALL IDX Listings"
        onChange={handleFilters}
      />
    </div>

    <div className="filterType">
      <legend>Application Type</legend>
      <Field
        id="FOR_SALE"
        label="Sale"
        value={filters.FOR_SALE}
        onChange={handleFilters}
      />
      <Field
        id="RECENTLY_SOLD"
        label="Sold"
        value={filters.RECENTLY_SOLD}
        onChange={handleFilters}
      />
      <Field
        id="FOR_RENT"
        label="Rental"
        value={filters.FOR_RENT}
        onChange={handleFilters}
      />
    </div>

    {/* <div className="filterType">
      <legend>Agent Name</legend>
      <fieldset>
        <AgentFilter handleAgentChange={handleAgentChange} />
      </fieldset>
    </div> */}
  </section>
);

export default FiltersBox;
