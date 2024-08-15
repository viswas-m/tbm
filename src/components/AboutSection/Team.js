// Team.js
import React from 'react';
import './index.css'

function Team() {
  return (
    <div className="team">
      <div className="team-member">
        <img src="https://img.freepik.com/free-vector/man-red-shirt-with-white-collar_90220-2873.jpg?w=360" alt="Team Member 1" />
        <h3>Karanki Hemanth Kumar</h3>
        <p>Student</p>
      </div>
      <div className="team-member">
        <img src="https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-226.jpg" alt="Team Member 2" />
        <h3>Katreddi Sai Srinivas</h3>
        <p>Student</p>
      </div>
      <div className="team-member">
        <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg?semt=ais_hybrid" alt="Team Member 3" />
        <h3>Kondaveeti Mohan Satya Sriram</h3>
        <p>Student</p>
      </div>
    </div>
  );
}

export default Team;
