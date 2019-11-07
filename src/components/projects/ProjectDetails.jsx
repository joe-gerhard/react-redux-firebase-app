import React from "react";
import PropTypes from "prop-types";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptatum dolor, id explicabo recusandae suscipit omnis,
            perferendis architecto obcaecati veniam ullam, quaerat et voluptate
            quia inventore quidem nihil. Ullam, impedit!
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by the Net Ninja</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {};

export default ProjectDetails;
