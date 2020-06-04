import React, { Component } from "react";
import { connect } from "react-redux";
import ContributorSidebar from "./ContributorSidebar";

class DownloadReport extends Component {
  render() {
    const { data } = this.props;
    // data && console.log(data)
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-3 mr-2 bg-info  text-light">
            <ContributorSidebar className="" />
          </div>
          <div className="col-8 border border-dark">
            <div className="container ">
              <h1>Download Report</h1>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Image Name</th>
                    <th scope="col">Image Category</th>
                    <th scope="col">Total Downloads</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.download_report.map((ele) => (
                      <tr key={ele.id}>
                        <td>{ele.image_name} </td>
                        <td>{ele.image_category} </td>
                        <td>{ele.total_downloads} </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.getImagesReducer.data,
});

export default connect(mapStateToProps, null)(DownloadReport);
