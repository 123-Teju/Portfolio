import React, { useState } from "react";
import {
  Button,
  TextField,
} from "@material-ui/core";
import { toast } from "react-toastify"
import axios from "axios";
const UpdateAbout= ({onClose}) => {
    const [image,setImage]=useState()
     const SubmitHandler=async(e)=>{
         e.preventDefault()
         const data=new FormData(e.currentTarget)
         const actualData={
             image:image
         }
         try {
             
             await axios.post('http://localhost:2000/addAbout',actualData)
             toast.success(" Added SuccessFully")
             onClose()
         } catch (error) {
             toast.error(error)
         }
 
     }
     const handleImage=(e)=>{
        e.preventDefault()
        const reader=new FileReader()
        const file=e.target.files[0]
        if (file.size <700000) { 
           toast.success("Image is Accepted")
           reader.onloadend = () => {
             setImage(reader.result);
           };
           reader.readAsDataURL(file);
         } else {
           toast.error("Image is Too Largee")
         }
    }
  const handleClose = () => {
    onClose() 
  };
  return (
    <div style={{padding:50, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, backgroundColor: "#F1F1F1", boxShadow: 24, p: 4 }}>
          <h2>Update Pic</h2>
          <form onSubmit={SubmitHandler}>
            <TextField
              fullWidth
              label="Image"
              onChange={handleImage}
              margin="normal"
              type='file'
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: 10 }}>
              Update 
            </Button>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Cancel
            </Button>
          </form>
        </div>
  );
};

export default UpdateAbout