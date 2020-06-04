import React from "react";
import { Link } from "react-router-dom";

function ContributorSidebar() {
  return (
    <div>
      <span>
        <Link className=" bg-none text-light" to="/uploadImage">
          Upload Image
        </Link>
      </span>
      <hr />
      <span>
        <Link className=" bg-none text-light" to="/downloadReport">
          Download Report
        </Link>
      </span>
    </div>
  );
}

export default ContributorSidebar;
