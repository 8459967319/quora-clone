
// import { List, ListItem, ListItemText } from '@material-ui/core';
// import '../styles/Sidebar.css';



// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <List position='fixed'>
//         <ListItem button>
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Spaces" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Notifications" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Profile" />
//         </ListItem>
//       </List>
//     </div>
//   );
// }

// export default Sidebar;

import SidebarOptions from "./SidebarOptions.jsx"

const Sidebar = () => {
  return (
    <div>
      <SidebarOptions/>
    </div>
  )
}

export default Sidebar
