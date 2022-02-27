import React from "react";
import Card from "./Card";
import { StyledList } from "./styles/CardList.styled";

const CardList = ({
  jobs,
  // loading,
  // error,
  filters,
  handleAddFilters,
}) => {
  const allJobs = jobs.jobs.map((job) => {
    let jobInfo = {
      company: job.company,
      contract: job.contract,
      featured: job.featured,
      id: job.id,
      languages: job.languages,
      level: job.level,
      location: job.location,
      logo: job.logo,
      new: job.new,
      position: job.position,
      postedAt: job.postedAt,
      role: job.role,
      tools: job.tools,
      tags: [job.role, job.level, ...job.languages, ...job.tools],
    };
    return (
      <Card
        key={job.id}
        {...jobInfo}
        // Filters
        filters={filters}
        handleAddFilters={handleAddFilters}
      />
    );
  });

  return (
    // <StyledList>{loading ? <p>Loading...</p> : <ul>{allJobs}</ul>}</StyledList>
    <StyledList>
      {" "}
      <ul>{allJobs}</ul>
    </StyledList>
  );
};

export default CardList;
