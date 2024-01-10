import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class GithubStatus extends React.Component {
    refresh = () => {
        axios.get('https://www.githubstatus.com/', {json: true})
          .then(response => {
            console.log('GitHub Status:', response.data);
          })
          .catch(error => {
            console.error('Error fetching GitHub status:', error);
          });
      }
      

  render() {
    return (
      <div className="centered-container">
        <div className="content-container">
          <h1 style={{ textAlign: 'center' }}>Github Status</h1>
          <h3 style={{ textAlign: 'center', color: 'red' }}>Click below to refresh status.</h3>
          <center>
            <br></br>
            <button onClick={this.refresh} className="button-62">
              Refresh
            </button>
            <br />
            <br />
            <br />
            <Link to="/" className="button-62">
              Home
            </Link>
          </center>
        </div>
      </div>
    );
  }
}

export default GithubStatus;
