import React, { Component } from 'react'
import axios from "axios"
export default class Profile extends Component {
    state = {
        selectedFile: null
    }
    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
            
        })
        // console.log(event.target.files[0])
    };
    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        
       axios.post('', fd, {
           onUploadProgress: ProgressEvent => {
               console.log('Upload Progress:' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100 ) + '%')
           }
       })
       .then(res => {
           console.log(res);
       });
    }
    render() {
        return (
            <div>
                <input style={{display: 'none'}} type="file"
                 onChange={this.fileSelectHandler} 
                 ref={fileInput => this.fileInput = fileInput} ></input>
                <button onClick={this.fileUploadHandler} >Upload</button>
                <button onClick={() => this.fileInput.click()} >Pick File</button>
            </div>
        )
    }
}
