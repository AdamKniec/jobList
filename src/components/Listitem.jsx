import React from "react";
import "./styles/listItem.scss";

const ListItem = ({ job, handleTagClick }) => {
  const renderGivenDataAsTabs = (data) => {
    return job[data]
      ? job[data].map((tool, i) => {
          return (
            <span className="tag" key={i} onClick={() => handleTagClick(tool)}>
              {tool}
            </span>
          );
        })
      : "";
  };

  return (
    <li key={job.id} className={`list-item ${job.featured ? "featured" : ""}`}>
      <div className="job-data-container">
        <img src={job.logo} alt="" className="logo" />
        <div className="job-details-box">
          <div>
            <span className="company-name">{job.company}</span>
            {job.new && <span className="new-offer">NEW!</span>}
            {job.featured && <span className="featured">FEATURED</span>}
          </div>
          <h3 className="position-name">{job.position}</h3>
          <div className="job-offer-bottom-details">
            <span className="position-offer-tab">{job.postedAt}</span>
            <span className="position-offer-tab">{job.contract}</span>
            <span className="position-offer-tab">{job.location}</span>
          </div>
        </div>
      </div>
      <div className="labels-container">
        <span className="tag" onClick={() => handleTagClick(job.role)}>
          {job.role}
        </span>
        <span className="tag" onClick={() => handleTagClick(job.level)}>
          {job.level}
        </span>
        {renderGivenDataAsTabs("tools")}
        {renderGivenDataAsTabs("languages")}
      </div>
    </li>
  );
};

export default ListItem;
