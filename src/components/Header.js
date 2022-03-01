import React from "react";
import Filter from "./Filter";
import { StyledHeader } from "./styles/Header.styled";

const Header = ({ filters, clearFilters, removeFilter }) => {
  // console.log("FILTERS", filters);
  return (
    <StyledHeader>
      {filters.length !== 0 && (
        <Filter
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
