import React from "react";
import { Link } from "react-router-dom";

class BorderRadiusDisplayer extends React.Component {
    state = {
        height: 100,
        width: 100,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    };

    handleChange = (event, property) => {
        if (property === "width" || property === "height") {
            if (event.target.value >= 400) {
                this.setState({ [property]: 400 });
                return;
            }
        }
        this.setState({ [property]: event.target.value });
    };
    

    render() {
        const modifiedCubeStyle = {
            background: 'linear-gradient(to top right, #87c0a7, #6981c1)',
            height: `${this.state.height}px`,
            width: `${this.state.width}px`,
            borderRadius: `${this.state.top}% ${this.state.right}% ${this.state.bottom}% ${this.state.left}%`,  
            marginTop: '20px',
        };
        

        return (
            <div className="centered-container">
                <div style={{ width: '45%' }} className="content-container">

                    <h1 style={{ textAlign: 'center' }}>Border Radius Displayer</h1>
                    <h3 style={{ textAlign: 'center', color: 'red' }}> Modify the values to see a change in the element below.</h3>

                    <center>
                        <div style={{ alignContent: 'center', alignItems:'center', display: 'flex', justifyContent: 'center' }}>
                            <h3>Border Radius:</h3>
                            <div>
                                <label htmlFor="input1">Left:</label>
                                <input value={this.state.left} type="number" id="input1" name="input1" className="inputText" onChange={(e) => this.handleChange(e, "left")} />
                            </div>

                            <div>
                                <label htmlFor="input2">Right:</label>
                                <input value={this.state.right} type="number" id="input2" name="input2" className="inputText" onChange={(e) => this.handleChange(e, "right")} />
                            </div>

                            <div>
                                <label htmlFor="input3">Top:</label>
                                <input value={this.state.top} type="number" id="input3" name="input3" className="inputText" onChange={(e) => this.handleChange(e, "top")} />
                            </div>

                            <div>
                                <label htmlFor="input4">Bottom:</label>
                                <input value={this.state.bottom} type="number" id="input4" name="input4" className="inputText" onChange={(e) => this.handleChange(e, "bottom")} />
                            </div>
                        </div>

                        <div style={{ alignContent: 'center', alignItems:'center', display: 'flex', justifyContent: 'center' }}>
                            <h3>Height/Width:</h3>                            
                            <div>
                                <label htmlFor="input5">Width:</label>
                                <input value={this.state.width} type="number" max="500" id="input5" name="input5" className="inputText" onChange={(e) => this.handleChange(e, "width")} />
                            </div>

                            <div>
                                <label htmlFor="input6">Height:</label>
                                <input value={this.state.height} type="number" max="500" id="input6" name="input6" className="inputText" onChange={(e) => this.handleChange(e, "height")} />
                            </div>
                        </div>


                        <div style={modifiedCubeStyle}></div>

                        <br /><br /><br />
                        <Link to="/" className="button-62">
                            Home
                        </Link>
                    </center>
                </div>
            </div>
        );
    }
}

export default BorderRadiusDisplayer;
