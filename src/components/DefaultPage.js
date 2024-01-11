import React from 'react';
import { Link } from 'react-router-dom';

const DefaultPage = () => {
  return (
    <div className="centered-container">
      <div className="content-container">
        <h1 style={{textAlign:'center'}}>Choose One of the Mini Projects</h1>
        <h1 style={{ fontSize: '1.0em', textAlign: 'center', color: 'blue' }}>Developed by Tanmay Singhal</h1>
                <h3 style={{color:'red', textAlign:'center'}}>Choose an option:</h3>

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
            <Link to="/lorem-ipsum" className="button-62">
              Lorem Ipsum
            </Link>
            {/* <Link to="/github-status" className="button-62">
              Github Status
            </Link> */}
            <Link to="/password-generator" className="button-62">
              Password Generator
            </Link>
            <Link to="/currency-converter" className="button-62">
              Currency Converter
            </Link>
            <Link to="/flip-image" className="button-62">
              Flip Image
            </Link>
            </center>
      </div>
    </div>
  );
};

export default DefaultPage;
