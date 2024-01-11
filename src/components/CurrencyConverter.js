import React from "react";
import { Link } from "react-router-dom";

class CurrencyConverter extends React.Component {
  state = {
    source: "USD",
    destination: "USD",
    sourceVal: "",
    desVal: "",
  };

  exchangeRates = {
    USD: {
      USD: 1,
      EUR: 0.8126,
      CAD: 1.2742,
      INR: 73.48,
    },
    EUR: {
      EUR: 1, 
      USD: 1.2309,
      CAD: 1.5563,
      INR: 89.56,
    },
    CAD: {
      CAD: 1, 
      USD: 0.7857,
      EUR: 0.6423,
      INR: 57.92,
    },
    INR: {
      INR: 1,
      USD: 0.0120351426,
      EUR: 0.0112,
      CAD: 0.0173,
    },
  };

  handleSourceChange = (e) => {
    this.setState({ source: e.target.value }, () => {
      this.convertCurrency();
    });
  };

  handleDestinationChange = (e) => {
    this.setState({ destination: e.target.value }, () => {
      this.convertCurrency();
    });
  };

  handleSourceValueChange = (e) => {
    const sourceVal = e.target.value;
    this.setState({ sourceVal }, () => {
      this.convertCurrency();
    });
  };

  convertCurrency = () => {
    const amount = parseFloat(this.state.sourceVal);
    if (!isNaN(amount)) {
      const rate = this.exchangeRates[this.state.source][this.state.destination];
      const convertedValue = (amount * rate).toFixed(2);
      this.setState({ desVal: convertedValue });
    }
  };
  render() {
    const currencies = Object.keys(this.exchangeRates);

    return (
      <div className="centered-wrapper"> {/* Added wrapper div */}
        <div className="centered-container">
          <div className="content-container">
            <h1 style={{ textAlign: "center" }}>Currency Converter</h1>
            <h3 style={{ textAlign: "center", color: "red" }}>
              Choose source and destination currency (not live through API).
            </h3>

      <center>
              <select
                onChange={this.handleSourceChange}
                className="dropdown-62"
                value={this.state.source}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <select
                onChange={this.handleDestinationChange}
                className="dropdown-62"
                value={this.state.destination}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            
            <br />
            <br />
            <input
              type="text"
              value={this.state.sourceVal}
              onChange={this.handleSourceValueChange}
              className="inputText"
              placeholder="Source Value"
            />

            <input
              type="text"
              value={this.state.desVal}
              className="inputText"
              placeholder="Destination Value"
              disabled
            />

            <br />
            <Link to="/" className="button-62">
              Home
            </Link>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;