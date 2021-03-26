import React from "react";
import Profile from "./views/Profile";
import Bootstrap from 'bootstrap';


const ProfileUpload = () => {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({})
      selectedFile: event.target.files[0]
  }

  fileUploadHandler = () => {
      const formData = new formData();
      formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
     bootstrap.post('https://react-bootstrap.github.io/components/images/#image-api', formData, {
        onUploadProgress: progressEvent => {

        }
      })
      

  }
  render () {
    return (
        <div className="App">
          <input style={{display: 'none'}} 
          type="file" 
          onChange={this.fileSelectedHandler} 
          ref={fileInput => this.fileInput = fileInput}/>
          <button onClick={this.fileInput.click}>Pick File</button>
          <button onClick={this.fileUploadHandler}>Upload</button>
        </div>
    )
  }
}
  