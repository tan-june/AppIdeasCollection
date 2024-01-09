import React from 'react';
import { Link } from 'react-router-dom';

class Inputer extends React.Component {
  state = {
    dollarValue: '',
    centsValue: ''
  };

  convertDollar = () => {
    const dollarValue = parseFloat(this.state.dollarValue) || 0;

    const dollarFloor = Math.floor(dollarValue);
    const totalCents = ((dollarValue - dollarFloor)*100) + (dollarFloor * 100);

    this.setState({ centsValue: totalCents });
  };

  handleInputChange = (e) => {
    this.setState({ dollarValue: e.target.value }, () => {
      this.convertDollar();
    });
  };

  render() {
    return (
      <div className="centered-container">
        <div className="content-container">
          <h1 style={{ textAlign: 'center' }}>Dollar to Cents</h1>
          <h3 style={{ textAlign: 'center', color: 'red' }}>Input Dollar Value</h3>
          <center>
            <br></br>
            <h3 style={{ textAlign: 'center', color: '#7293cc' }}>
              Dollar:
            </h3>
            <input
              type="text"
              onChange={this.handleInputChange}
              value={this.state.dollarValue}
              className="inputText"
              placeholder="Dollar"
            />
            <h3 style={{ textAlign: 'center', color: '#7293cc' }}>
              Cents:
            </h3>
            <input
              type="text"
              value={this.state.centsValue}
              className="inputText"
              placeholder="Cents"
              disabled
            />
            <div className="errorBoxVal" id="errorBox"></div>

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

export default Inputer;
