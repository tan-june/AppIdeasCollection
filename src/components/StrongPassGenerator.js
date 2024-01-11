import React from "react";
import { Link } from "react-router-dom";

var generator = require('generate-password-browser');

class StrongPassGenerator extends React.Component{
    state = {
        password: ''
    }

    componentDidMount(){
        this.passwordGenerate();
    }

    passwordGenerate = () => {
         let newpassword = generator.generate({
            length: 15,
            numbers: true,
            symbols: true, 
            lowercase: true,
            upercase: true,
            strict: true
    })

    this.setState({password: newpassword});
    return true;
    }
    
    render() {
        return (
          <div className="centered-container">
            <div className="content-container">
            <h1 style={{ textAlign: 'center' }}>Password Generator</h1>
          <h3 style={{ textAlign: 'center', color: 'red' }}>Copy to clipboard or regenerate below.</h3>
          <center>


          <input
              type="text"
              value={this.state.password}
              className="inputText"
              placeholder="Cents"
              disabled
            />
            <button onClick={() => navigator.clipboard.writeText(this.state.password)} className="button-62">
              Copy
            </button>

    <button onClick={this.passwordGenerate} className="button-62">
              Generate
            </button>
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

export default StrongPassGenerator;