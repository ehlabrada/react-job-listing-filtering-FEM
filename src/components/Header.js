import React from "react";
import Filter from "./Filter";
import { StyledHeader } from "./styles/Header.styled";

const Header = ({ filters, handleAddFilters, clearFilters }) => {
  // console.log("FILTERS", filters);
  return (
    <StyledHeader>
      {filters.length !== 0 && (
        <Filter
          filters={filters}
          handleAddFilters={handleAddFilters}
          clearFilters={clearFilters}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
