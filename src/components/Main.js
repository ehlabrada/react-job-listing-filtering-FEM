import React from "react";
import Content from "./Content";
import Filter from "./Filter";
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

      {filters.length !== 0 && (
        <Filter
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
      )}

      <Content
        jobs={jobs}
        // loading={loading}
        // error={error}
        removeFilter={removeFilter}
        clearFilters={clearFilters}
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
