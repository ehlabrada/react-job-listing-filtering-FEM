import { useState } from "react";

import { ThemeProvider } from "styled-components";

// Components
import Main from "./components/Main";

// Styles
import GlobalStyle from "./components/styles/theme/globalStyle";
import Theme from "./components/styles/theme/Theme";

// Data
import data from "./data.json";

const App = () => {
  const [jobs, setJobs] = useState(data);

  // States
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Add filters
  const handleAddFilters = (filter) => {
    if (filters.includes(filter)) {
      setFilters((prevFilters) => {
        return prevFilters.filter((filtro) => filtro !== filter);
      });
    } else {
      setFilters((prevFilters) => {
        return [...prevFilters, filter];
      });
    }
  };

  // Remove all filters
  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Main
          jobs={jobs}
          // Filters
          filters={filters}
          handleAddFilters={handleAddFilters}
          clearFilters={clearFilters}
          // Filtered Jobs
          filteredJobs={filteredJobs}
          setFilteredJobs={setFilteredJobs}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
