import React, { useContext, useEffect, useReducer, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { ExitToApp, Person } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { Store } from "../Utilities/Store";
import axios from "axios";
import UpdatePass from "./UpdatePassword";
import UpdateAbout from "./UpdateAbout";
import UpdateHome from "./UpdateHome";
import UpdateServices from "./UpdateServices";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { toast } from "react-toastify";
import DrawerCom from "../Utilities/Drawer";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  image: {
    width: 50,
    height: 50,
  },
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const reducer=(state,action)=>{
switch(action.type){
  case "FETCH_REQUEST":
    return {...state,loading:true}
  case "FETCH_SUCCESS":
    return {...state,loading:false,product:action.payload}
  case "FETCH_FAILURE":
    return{...state,loading:false,error:action.payload}  
  default :
  return " "  
}
}


const initialtState={
  product:[],
  loading:true,
  error:''
}


const Dashboard = () => {
  const {state}=useContext(Store)
  const {UserInfo}=state
  const [{loading,error,product},dispatch]=useReducer(reducer,initialtState)
  const navigate=useNavigate()
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const classes = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  }));
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleOpen4 = () => {
    setOpen4(true);
  };

  const handleClose = () => {
    setOpen(false);
    // window.location.reload()
  };
  const handleClose2 = () => {
    setOpen2(false);
    window.location.reload()
  };
  const handleClose3 = () => {
    setOpen3(false);
    window.location.reload()
  };
  const handleClose4 = () => {
    setOpen4(false);
    window.location.reload()
  };

  const handleLogout = () => {
    // handle logout logic
    localStorage.removeItem("UserInfo")
    navigate('/')
    window.location.reload()
  };
  const deleteHandler=async(id)=>{
    const service={id:id}
    try {
      const data = await axios.post("http://localhost:2000/deleteServices",service)
      toast.error("Deleted")
      window.location.reload()
    } catch (error) {
      toast.error("Item Does Not Deleted")
    }
  }
  useEffect(()=>{
   const fetchData=async()=>{
    dispatch({type:"FETCH_REQUEST"})
    try {
      const result=await axios.get('http://localhost:2000/fetchServices')
      dispatch({type:"FETCH_SUCCESS",payload:result.data})
    } catch (error) {
      dispatch({type:"FETCH_FAILURE",payload:error.message})
    }
   }
   fetchData()
  },[])
  const theme=useTheme()
  const isMatch=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className={classes.root}>
      {isMatch?
null:
<Drawer
      className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}        
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
          <ListItem>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Admin"  />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Admin Email" secondary={UserInfo.email} />
          </ListItem>
          <ListItem button onClick={handleOpen}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Update Password" />
    </ListItem>
    <ListItem button onClick={handleLogout}>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </List>
</Drawer>
      }
      <main className={classes.content}>
        <div className={classes.toolbar} />  
        <Modal open={open} onClose={handleClose}>
        {<UpdatePass  onClose={handleClose}/>}
      </Modal>  
        <Modal open={open2} onClose={handleClose2}>
        {<UpdateAbout  onClose={handleClose2}/>}
      </Modal>  
        <Modal open={open3} onClose={handleClose3}>
        {<UpdateHome  onClose={handleClose3}/>}
      </Modal>  
        <Modal open={open4} onClose={handleClose4}>
        {<UpdateServices onClose={handleClose4}/>}
      </Modal>  
      <Box marginLeft='40px' textAlign='center' marginTop={4} className='B4'>
         <Grid  container  justifyContent='center' columnSpacing={5} >
          <Grid item  lg={8} md={8} xs={12} >
            <h4>Update About Pic</h4>
            <Button variant='contained'color='warning' onClick={handleOpen2}>Update</Button>
            <h4>Update Home Pic</h4>
            <Button variant='contained'color='warning' onClick={handleOpen3}>Update</Button>
            <h4>Add Services</h4>
            <Button variant='contained'color='warning' onClick={handleOpen4}>Add</Button>
          </Grid>
         </Grid>
      </Box>
      <Box sx={{ mt: 3 }} textAlign='center'>
        <Grid container justifyContent='center' sx={{marginTop:"40px",marginLeft:"10px"}}>
          <Grid item lg={6} md={4} xs={3}>
      <TableContainer>
        <Table className={classes.table} aria-label="dashboard table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Framework</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Image</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell>{row.framework}</TableCell>
                <TableCell>
                  <a href={row.link} target="_blank" rel="noopener noreferrer">
                    {row.link}
                  </a>
                </TableCell>
                <TableCell>
                  <img width='50px' height='50px' src={row.image} alt={row.title} className={classes.image} />
                </TableCell>
                <TableCell>
                <Button color='warning' variant='contained' onClick={()=>{
                  deleteHandler(row.id)
                }}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                          </Grid>
                        </Grid>
    </Box>
      </main>
    </div>
  );
};

export default Dashboard;
