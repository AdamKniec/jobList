import React from "react";
import ListItem from "./Listitem";
import "./styles/jobList.scss";

const JobList = ({ handleTagClick, filteredJobList }) => {
  return (
    <div className="job-list-container">
      <ul className="job-list">
        {filteredJobList.map((job) => {
          return <ListItem job={job} handleTagClick={handleTagClick} />;
        })}
      </ul>
    </div>
  );
};

export default JobList;
