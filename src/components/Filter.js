import React from "react";
import { ClearFilter, Filters, StyledFilter } from "./styles/Filter.styled";

const Filter = ({ filters, clearFilters }) => {
  return (
    <StyledFilter>
      <Filters>
        {filters.map((filter, index) => {
          return <span key={index}>{filter}</span>;
        })}
      </Filters>
      <ClearFilter onClick={clearFilters}>Clear</ClearFilter>
    </StyledFilter>
  );
};

export default Filter;
