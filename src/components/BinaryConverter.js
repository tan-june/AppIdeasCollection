import React from 'react';
import { Link } from 'react-router-dom';

class BinaryConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bin: '',
      dec: '', 
    };
  }

  convertBin = () => {
    const binaryString = document.getElementById('bin').value;
    const newValueBin = document.getElementById('dec');
    const errorBox = document.getElementById('errorBox');

    for (const digit of binaryString) {
      if (digit !== '0' && digit !== '1') {
        errorBox.innerHTML = ` <span >
        You entered a non-binary digit (please enter only 0 or 1).
      </span>`;
      return false;

    }
    }

    errorBox.innerHTML = '';

    const reverse = binaryString.split('').reverse();
    let decimalVal = 0;

    for(let inc = 0; inc <reverse.length; inc++){
      decimalVal = decimalVal + (Math.pow(2,inc)*parseInt(reverse[inc]));
    }
    newValueBin.value = decimalVal;
    console.log(decimalVal);

    return true;
  };
  

  convertDec = () => {
    const decimalString = document.getElementById('dec').value;
    const errorBox = document.getElementById('errorBox');
    const newValueBin = document.getElementById('bin');
  
    if(parseInt(decimalString) >= 1048576){
      errorBox.innerHTML = ` <span >
      Decimal Value is too large to display in this calculator.
    </span>`;
    return false;
    }

    errorBox.innerHTML = '';

    let number = parseInt(decimalString);
    let binaryString = '';

    if(number === 0){
      binaryString = '0';
    }
    else{
    while(number > 0){
      let remainder = number % 2;
      binaryString = remainder + binaryString;
      number = Math.floor(number/2);
    }
  }
    newValueBin.value = binaryString;
    return true;

  }


  render() {
    return (

<div className="centered-container">
<div className="content-container">
  <h1 style={{textAlign:'center'}}>Binary to Decimal | Decimal to Binary Converter</h1>
  <h3 style={{textAlign:'center', color: 'red'}}>Change Value In Either Box</h3>
  <center>
    <br></br>
   <h3 style={{textAlign:'center', color: '#7293cc'}}> Binary:
    </h3> 
    <input type="text" onChange={this.convertBin} id="bin" className="inputText" placeholder='Binary Number'/>
    <h3 style={{textAlign:'center', color: '#7293cc'}}> Decimal:
    </h3> 
    <input type="text" onChange={this.convertDec} id="dec" className="inputText" placeholder='Decimal Number'/>   
    <div className='errorBoxVal' id='errorBox'></div> 
    <br/><br/><br/>
    <Link to="/" className="button-62">
              Home
    </Link>
    </center>
</div>
      </div>
    );
  }
}

export default BinaryConverter;

