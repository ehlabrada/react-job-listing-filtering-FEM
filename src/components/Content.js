import React from "react";
import CardList from "./CardList";
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
}) => {
  return (
    <StyledContent>
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
