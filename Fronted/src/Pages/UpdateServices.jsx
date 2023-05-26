import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
} from "@material-ui/core";
import { toast } from "react-toastify"
import axios from "axios";
import { Box } from "@mui/material";

const UpdateServices= ({onClose}) => {
  const [title, setTitle] = useState("");
  const [framework, setFramework] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const handleClose = () => {
    onClose() 
  };
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

  const handleSave =async(e) => {
    // handle save logic here
    e.preventDefault()
    const actualData={
    title:title,
    framework:framework,
    link:link,
    image:image
  }
  try {
    const {data} = await axios.post('http://localhost:2000/addServices',actualData)
    toast.success("Services added")
    handleClose();
  } catch (error) {
    toast.error("Required All Fields")
  }
};
  return (
    <div style={{padding:50, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, backgroundColor: "#F1F1F1", boxShadow: 24, p: 4 }}>
          <h2>Add Services</h2>
          <form onSubmit={handleSave}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Framework"
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Image"
              onChange={handleImage}
              margin="normal"
              type="file"
            />
            <Box style={{marginTop:"40px"}}>
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: 10 }}>
              Add Services
            </Button>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Cancel
            </Button>
            </Box>
          </form>
        </div>
  );
};

export default UpdateServices