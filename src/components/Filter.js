import React from "react";
import {
  ClearFilter,
  Filters,
  SingleFilter,
  StyledFilter,
} from "./styles/Filter.styled";
import closeIcon from "../images/icon-remove.svg";

const Filter = ({ filters, clearFilters, removeFilter }) => {
  return (
    <StyledFilter>
      <Filters>
        {filters.map((filter, index) => {
          console.log("FILTERS AT FILTER", filter);
          return (
            <SingleFilter key={index}>
              {filter}
              <span onClick={() => removeFilter(filter)}>
                <img src={closeIcon} alt="delete-filter-icon" />
              </span>
            </SingleFilter>
          );
        })}
      </Filters>
      <ClearFilter onClick={clearFilters}>Clear</ClearFilter>
    </StyledFilter>
  );
};

export default Filter;
