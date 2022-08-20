import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import * as BsIcons from "react-icons/bs";
import axios from "axios";

const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    console.log(...formData);
    try {
        const {data} = await axios.post("/upload-image", formData);
    } catch (error) {
        console.log(error);
    }
}

const FileUpload = () => {
    const classes = useStyles();
  return (
    <div className={classes.fileInput}>
    <label htmlFor="image">
    <BsIcons.BsFillCameraFill style={{color: '#022658', cursor: 'pointer'}} size={30}/>
    <input type='file' onChange={handleImage} name="file" accept="images/*"  id="image" hidden />
    </label>
    
    </div>
  )
}

export default FileUpload;