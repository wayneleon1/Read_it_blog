import "../components/style/dashboard.css";
import { useState, useEffect } from "react";
export default function Dashboard() {
  return (
    <>
      <div className="dashboard-section container-section">
        <div className="cards-container">
          <div className="dash-cards gold">
            <div className="col-1">
              <h3>23+</h3>
              <h4>Total Posts</h4>
            </div>
            <div className="col-2">
              <div className="dash-icon">
                <iconify-icon icon="mdi:post-it-note-check"></iconify-icon>
              </div>
            </div>
          </div>
          <div className="dash-cards dodge-blue">
            <div className="col-1">
              <h3>23+</h3>
              <h4>Total Comments</h4>
            </div>
            <div className="col-2">
              <div className="dash-icon">
                <iconify-icon icon="ant-design:comment-outlined"></iconify-icon>
              </div>
            </div>
          </div>
          <div className="dash-cards gray">
            <div className="col-1">
              <h3>23+</h3>
              <h4>Total Users</h4>
            </div>
            <div className="col-2">
              <div className="dash-icon">
                <iconify-icon icon="clarity:users-solid"></iconify-icon>
              </div>
            </div>
          </div>
          <div className="dash-cards tomato">
            <div className="col-1">
              <h3>23+</h3>
              <h4>Total Emails</h4>
            </div>
            <div className="col-2">
              <div className="dash-icon">
                <iconify-icon icon="clarity:email-solid"></iconify-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
