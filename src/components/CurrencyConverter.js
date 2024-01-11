import React from "react";
import { Link } from "react-router-dom";

class CurrencyConverter extends React.Component{

    state = {
        source: '',
        destination: '',
        sourceCurr: '',
        destinationCurr: ''
    }

    render() {
        return (
          <div className="centered-container">
            <div className="content-container">
            <h1 style={{ textAlign: 'center' }}>Currency Converter</h1>
          <h3 style={{ textAlign: 'center', color: 'red' }}>Choose source and destination currency.</h3>
          <center>

            <div style={{alignItems: 'center', textAlign:'center', alignContent:'center', display:'flex'}}>
            <center>
          <select
              style={{alignItems: 'center', textAlign:'center', alignContent:'center'}}
              type="dropdown"
              onChange={(e) => this.setState({sourceCurr: e.target.value })}
              className="dropdown-62"
              placeholder="Source Currency"
            >

              <option>USD</option>
              <option>CAD</option>
              <option>EURO</option>
            </select>
            {/* <h1>-></h1> */}
            <select
              style={{alignItems: 'center', textAlign:'center', alignContent:'center'}}
              type="dropdown"
              onChange={(e) => this.setState({destinationCurr: e.target.value })}
              className="dropdown-62"
              placeholder="Destination Currency"
            >

              <option>USD</option>
              <option>CAD</option>
              <option>EURO</option>
            </select>
            </center>
            </div>

          <input
              type="text"
              value={this.state.source}
              onChange={(e) => this.setState({source: e.target.value })}
              className="inputText"
              placeholder="Source Value"
            />


        <input
              type="text"
              value={this.state.destination}
            //   onChange={(e) => this.setState({source: e.target.value })}
              className="inputText"
              placeholder="Destination Value"
              disabled
            />
            
            
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

export default CurrencyConverter;