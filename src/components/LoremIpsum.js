import React from 'react';
import { Link } from 'react-router-dom';
import { LoremIpsum } from 'lorem-ipsum';

class LoremIpsumGenerator extends React.Component {
  state = {
    LoremIpsum: '',
  };

  generateLoremIpsum = () => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });

    let newLoremIpsum = lorem.generateParagraphs(3);
    this.setState({ LoremIpsum: newLoremIpsum });
  };

  render() {
    return (
      <div className="centered-container">
        <div className="content-container">
          <center>
            <h1 style={{ textAlign: 'center' }}>Lorem Ipsum Generator</h1>
            <h3 style={{ textAlign: 'center', color: 'red' }}>
              Click to Generate Lorem Ipsum.
            </h3>

            <textarea
              rows={5}
              style={{ minHeight:'320px', minWidth: '700px', width: '100%' }}
              value={this.state.LoremIpsum}
              className="inputText"
              placeholder="Generated Text"
              disabled
            />

            <button onClick={this.generateLoremIpsum} className="button-62">
              Generate
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

export default LoremIpsumGenerator;
