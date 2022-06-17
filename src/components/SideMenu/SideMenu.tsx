import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { tcb_auth } from '../../configs/global';

const SideMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()

  const handleListItemClick = (index: number, path: string) => {
    setSelectedIndex(index)
    navigate(path)
  }

  const logout = () => {
    tcb_auth.signOut().then(() => {
      window.location.reload()
    })
  }

  return (
    <List sx={{
      width: '100%', boxSizing: 'border-box', maxWidth: 250, bgcolor: 'background.paper',
      '& .MuiListItemText-primary': {
        fontSize: '1rem'
      },
      '& .MuiListItemIcon-root': {
        minWidth: '42px'
      }
    }}>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={() => handleListItemClick(0, 'profile')}>
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
        <ListItemText primary="我的资料" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={() => handleListItemClick(1, 'join-us')}>
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="身份申请" />
      </ListItemButton>
      <ListItemButton
        onClick={logout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="退出登录" />
      </ListItemButton>
    </List >
  )
}

export default SideMenu