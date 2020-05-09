import React, { useState, useEffect } from "react";
import Header from "./Header";
import JobList from "./JobList";
import data from "../data.json";

const JobBoard = () => {
  useEffect(() => {
    setJobs(data);
  }, []);

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  console.log(filters);

  const filteredJobList = jobs.filter((job) => {
    const tagLists = [job.role, job.level].concat(job.tools, job.languages);
    return filters.every((filter) => tagLists.indexOf(filter) !== -1);
  });

  const handleTagClick = (tag) => {
    if (filters.indexOf(tag) === -1) {
      setFilters([...filters, tag]);
    }
  };

  const handleRemoveClick = (elem) => {
    const filtersAfterRemoval = filters.filter((filter) => filter !== elem);
    setFilters(filtersAfterRemoval);
  };

  return (
    <div className="container">
      <Header filters={filters} handleRemove={handleRemoveClick} />
      <JobList
        handleTagClick={handleTagClick}
        filteredJobList={filteredJobList}
      />
    </div>
  );
};

export default JobBoard;

// to do - sensowne nazwy dla propsow itp
