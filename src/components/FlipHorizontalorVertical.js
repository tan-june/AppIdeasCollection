import React from 'react';
import upload from './upload.png';

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
    this.handleFlip(true, false);
  };

  handleHorizontal = () => {
    this.handleFlip(false, true);
  };

  positiveRotate = () => {
    this.handleRotate(15);
  };

  negativeRotate = () => {
    this.handleRotate(-15);
  };
  
  downloadImage = () => {
    if (this.state.selectedFile) {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(this.state.selectedFile);
      downloadLink.download = 'modified_image.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
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

  handleFlip = (horizontal, vertical) => {
    if (this.state.selectedFile && this.state.selectedFile instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          canvas.width = img.width;
          canvas.height = img.height;

          if (horizontal || vertical) {
            ctx.translate(horizontal ? img.width : 0, vertical ? img.height : 0);
            ctx.scale(horizontal ? -1 : 1, vertical ? -1 : 1);
          }

          ctx.drawImage(img, 0, 0, img.width, img.height);

          canvas.toBlob((blob) => {
            this.setState({ selectedFile: blob }, () => {
              this.downloadImage();
              this.handleRemoveImage();
            });
          }, 'image/png');
        };

        img.src = event.target.result;
      };

      reader.readAsDataURL(this.state.selectedFile);
    }
  };

  handleRotate = (angle) => {
    if (this.state.selectedFile && this.state.selectedFile instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          canvas.width = img.height;
          canvas.height = img.width;

          ctx.translate(img.height / 2, img.width / 2);
          ctx.rotate((angle * Math.PI) / 180);
          ctx.drawImage(img, -img.width / 2, -img.height / 2, img.width, img.height);

          canvas.toBlob((blob) => {
            this.setState({ selectedFile: blob }, () => {
              this.downloadImage();
              this.handleRemoveImage();
            });
          }, 'image/png');
        };

        img.src = event.target.result;
      };

      reader.readAsDataURL(this.state.selectedFile);
    }
  };

  render() {
    let imageElement = null;

    if (this.state.selectedFile instanceof File) {
      try {
        imageElement = (
          <img
            src={URL.createObjectURL(this.state.selectedFile)}
            alt="Uploaded"
            style={{
              width: '60%',
              height: '30%',
              marginBottom: '20px',
              border: '3px solid black', 
             }}
          />
        );
      } catch (error) {
        console.error("Error creating object URL:", error);
        this.setState({ selectedFile: null });
      }
    }

    return (
      <div className="centered-container">
        <div className="content-container">
          <h1 style={{ textAlign: 'center' }}>Flip Image</h1>
          <h3 style={{ textAlign: 'center', color: 'red' }}>Upload Image to modify.</h3>

          <div style={{ border: '3px solid #fff', borderRadius: '60px', padding: '20px', border: '3px solid #87c0a7', marginTop: '40px', textAlign: 'center' }}>
            {imageElement}

            {this.state.selectedFile && (
              <div style={{ margin: '20px auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                
               <button
                  className='button-62'
                  onClick={this.handleRemoveImage}
                >
                  Remove Image
                </button>

                  <button
                    className='button-62'
                    onClick={this.handleHorizontal}
                  >
                    Flip Horizontal
                  </button>

                  <button
                    className='button-62'
                    onClick={this.handleVertical}
                  >
                    Flip Vertical
                  </button>
            

                  <button
                    className='button-62'
                    onClick={this.negativeRotate}
                  >
                    Rotate -15°
                  </button>

                  <button
                    className='button-62'
                    onClick={this.positiveRotate}
                  >
                    Rotate 15°
                  </button>
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
