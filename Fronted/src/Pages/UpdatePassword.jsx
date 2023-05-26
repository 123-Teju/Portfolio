import React, { useState } from "react";
import {
  Button,
  TextField,
} from "@material-ui/core";
import { toast } from "react-toastify"
import axios from "axios";

const UpdatePass= ({onClose}) => {
  const [pass, setPass] = useState("");
  const handleClose = () => {
    onClose() 
  };

  const handleSave =async(e) => {
    // handle save logic here
    e.preventDefault()
    const actualData={
    pass:pass,
  }
  try {
    const {data} = await axios.post('http://localhost:2000/updatePass',actualData)
    toast.success("Updated Password")
    handleClose();
  } catch (error) {
    toast.error("Required All Fields")
  }
};
  return (
    <div style={{padding:50, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, backgroundColor: "#F1F1F1", boxShadow: 24, p: 4 }}>
          <h2>UpdatePassword</h2>
          <form onSubmit={handleSave}>
            <TextField
              fullWidth
              label="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              margin="normal"
              type='password'
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: 10 }}>
              Update Password
            </Button>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Cancel
            </Button>
          </form>
        </div>
  );
};

export default UpdatePass