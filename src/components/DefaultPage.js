import React from 'react';
import { Link } from 'react-router-dom';

const DefaultPage = () => {
  return (
    <div className="centered-container">
      <div className="content-container">
        <h1 style={{textAlign:'center'}}>Choose One of the Mini Projects</h1>
        <h3 style={{color:'blue', textAlign:'center'}}>Choose an option:</h3>
          <center>
            <Link to="/binary-exchange" className="button-62">
              Binary Exchange
            </Link>
            <Link to="/border-radius" className="button-62">
              Border Radius Displayer
            </Link>
            <Link to="/dollar-to-cents" className="button-62">
              Dollar to Cents
            </Link>
            {/* <Link to="/flip-image" className="button-62">
              Flip Image
            </Link> */}
            <Link to="/lorem-ipsum" className="button-62">
              Lorem Ipsum
            </Link>
            {/* <Link to="/github-status" className="button-62">
              Github Status
            </Link> */}
            <Link to="/password-generator" className="button-62">
              Password Generator
            </Link>
            </center>
      </div>
    </div>
  );
};

export default DefaultPage;
