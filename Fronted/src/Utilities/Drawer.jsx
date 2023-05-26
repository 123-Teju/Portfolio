import React, { useContext, useState } from 'react'
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Modal} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from './Store'
import UpdatePass from '../Pages/UpdatePassword'

function DrawerCom() {
  const navigate=useNavigate()
  const [open,setOpen]=useState()
  const {state}=useContext(Store)
  const {UserInfo}=state
  const [openDrawer,setopenDrawer]=useState(false)
  const PAGES=[UserInfo?{name:"DASHBOARD",link:'/dashboard'}:"",{name:"WORK",link:"/"},{name:"ABOUT",link:"/about"},{name:"RESUME",link:"/resume"}]
  const handleLogout = () => {
    // handle logout logic
    localStorage.removeItem("UserInfo")
    navigate('/')
    window.location.reload()
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload()
  };
  return (
    <>
      <Drawer open={openDrawer}
      onClose={()=>setopenDrawer(false)}
      >
        {
            PAGES.map((page,index)=>(
          <List key={index} sx={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
            <ListItemButton component={Link} to={page.link}>
                <ListItemIcon>
                    <ListItemText onClick={()=> setopenDrawer(!openDrawer)} sx={{color:'white'}}>
                        {page.name}
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
          </List>
            ))
        }
        {
          UserInfo?
          <>
          <List  sx={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
            <ListItemButton onClick={handleOpen}>
                <ListItemIcon>
                    <ListItemText  sx={{color:'white'}}>
                       Update Password
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
          </List>
          <List  sx={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
            <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                    <ListItemText  sx={{color:'white'}}>
                        Log Out
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
          </List>
          </>:null
        }
      </Drawer>
          <IconButton sx={{marginLeft:'auto'}} onClick={()=> setopenDrawer(!openDrawer)}>
          <MenuIcon/>
          </IconButton>
          <Modal open={open} onClose={handleClose}>
        {<UpdatePass  onClose={handleClose}/>}
      </Modal>  
    </>
  )
}

export default DrawerCom
