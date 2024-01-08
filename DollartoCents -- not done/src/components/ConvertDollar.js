import React from 'react';
import { Link } from 'react-router-dom';

class ConvertDollartoCents extends React.Component {

  convertDollar = () => {

  }


  render() {
    return (

<div className="centered-container">
<div className="content-container">
<h1 style={{textAlign:'center'}}>Dollar to Cents</h1>
  <h3 style={{textAlign:'center', color: 'red'}}>Change Value In Either Box</h3>
  <center>
    <br></br>
   <h3 style={{textAlign:'center', color: '#7293cc'}}> Binary:
    </h3> 
    <input type="text" onChange={this.convertDollar} id="bin" className="inputText" placeholder='Binary Number'/>
    <h3 style={{textAlign:'center', color: '#7293cc'}}> Decimal:
    </h3> 
    <input type="text" id="dec" className="inputText" placeholder='Decimal Number'/>   
    <div className='errorBoxVal' id='errorBox'></div> 

    <br/><br/><br/>
      <button>asldkfj</button>
    
    </center>
</div>
      </div>
    );
  }
}

export default ConvertDollartoCents;

