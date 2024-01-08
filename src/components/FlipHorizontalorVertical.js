import React from 'react';
import upload from './upload.png';
import Jimp from 'jimp';

class FlipHorizontalorVertical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  
  handleRemoveImage = () => {
    this.setState({
      selectedFile: null,
    });
  };

  handleVertical = () => {
  };

  handleHorizontal = () => {
  };

  positiveRotate = () => {
    Jimp.read(this.state.selectedFile)
      .then(image => {
        const angle = 15;
         image.rotate(angle);
        this.setState({ selectedFile: image });
      })
      .catch(err => {
        console.error(err);
      });
  };
  
  negativeRotate = () => {
  };

  

  handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      this.setState({
        selectedFile: droppedFile,
      });
    }
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({
      selectedFile: file,
    });
  };

 render() {
    return (
        <div className="centered-container">
        <div className="content-container">
        <h1 style={{ textAlign: 'center' }}>Flip Image</h1>
                    <h3 style={{ textAlign: 'center', color: 'red' }}>Upload Image to modify.</h3>

  
                    <div style={{ borderRadius: '60px', padding:'20px', border: '3px solid #87c0a7', marginTop: '40px', textAlign: 'center' }}>

                    {this.state.selectedFile && (
    <div style={{ margin: '20px auto', textAlign: 'center' }}>
        <img
            src={URL.createObjectURL(this.state.selectedFile)}
            alt="Uploaded"
            style={{ width: '60%', height: '30%', marginBottom: '20px' }}
        />

<div style={{ margin: '20px auto', textAlign: 'center', display: 'flex' }}>
        <button
            className='button-62'
            style={{ textAlign: 'center', display: 'flex', margin: '0 auto', marginBottom: '10px' }}
            onClick={this.handleRemoveImage}
        >
            Remove Image
        </button>
</div>
<div style={{ margin: '20px auto', textAlign: 'center', display: 'flex' }}>

        <button
            className='button-62'
            style={{ textAlign: 'center', display: 'flex', margin: '0 auto', marginBottom: '10px' }}
            onClick={this.handleHorizontal}
        >
            Flip Horizontal
        </button>


        <button
            className='button-62'
            style={{ textAlign: 'center', display: 'flex', margin: '0 auto', marginBottom: '10px' }}
            onClick={this.handleVertical}
        >
            Flip Vertical
        </button>
</div>
<div style={{ textAlign: 'center', display: 'flex' }}>
        <button
            className='button-62'
            style={{ textAlign: 'center', display: 'flex', margin: '0 auto', marginBottom: '10px' }}
            onClick={this.negativeRotate}
        >
            Rotate -15°
        </button>

        <button
            className='button-62'
            style={{ textAlign: 'center', display: 'flex', margin: '0 auto', marginBottom: '10px' }}
            onClick={this.positiveRotate}
        >
            Rotate 15°
        </button>

</div>
    </div>
)}


{!this.state.selectedFile && (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
            id="drop_zone"
            onDrop={this.handleDrop}
            onDragOver={this.handleDrop}
            onClick={() => document.getElementById('fileInput').click()}
            className='uploadButton'
        >
            <img src={upload} width='80px' alt="Upload here." />
            <p>Drag your image to this <i>drop zone</i> or click to <i>upload</i>.</p>
        </div>
        
        <input
  id="fileInput"
  type="file"
  accept="image/*"
  onChange={this.handleFileChange}
  style={{ display: 'none' }}
/>
    </div>
)}
                   
</div>

                </div>
            </div>
        );
    }
}

export default FlipHorizontalorVertical;