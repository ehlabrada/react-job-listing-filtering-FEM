import React from "react";
import CardList from "./CardList";
import Filter from "./Filter";
import { StyledContent } from "./styles/Content.styled";

const Content = ({
  jobs,
  // loading,
  // error,
  filters,
  handleAddFilters,
  filteredJobs,
  setFilteredJobs,
  removeFilter,
  clearFilters,
}) => {
  return (
    <StyledContent filters={filters.length}>
      <CardList
        jobs={jobs}
        // loading={loading}
        // error={error}
        // Filters
        filters={filters}
        handleAddFilters={handleAddFilters}
        // Filtered Jobs
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
      />
    </StyledContent>
  );
};

export default Content;
