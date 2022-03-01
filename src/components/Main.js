import React from "react";
import Content from "./Content";
import Header from "./Header";
import { StyledMain } from "./styles/Main.styled";

const Main = ({
  jobs,
  // loading,
  // error,
  filters,
  handleAddFilters,
  clearFilters,
  filteredJobs,
  setFilteredJobs,
  removeFilter,
}) => {
  return (
    <StyledMain>
      <Header
        filters={filters}
        removeFilter={removeFilter}
        clearFilters={clearFilters}
      />
      {/* <Filter /> */}
      <Content
        jobs={jobs}
        // loading={loading}
        // error={error}
        // Filters
        filters={filters}
        handleAddFilters={handleAddFilters}
        // filtered Jobs
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
      />
    </StyledMain>
  );
};

export default Main;
