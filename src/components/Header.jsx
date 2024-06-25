
import { AppBar, Toolbar, Typography, InputBase, IconButton, Button } from '@material-ui/core';
import { Home, FeaturedPlayList, Create, People, Notifications, Search, Language, ExpandMore } from '@material-ui/icons';
import '../styles/Header.css';
// import logo from './images/logo.jpeg'

function Header() {
  return (
    <div className='main'>
<AppBar position="fixed" className="header"
     back>
      <Toolbar className="toolbar">
        <Typography variant="h6" noWrap className="logo">
         Quora Clone
        </Typography>
        
        <IconButton className="header__icon">
          <Home />
        </IconButton>
        <IconButton className="header__icon">
          <FeaturedPlayList />
        </IconButton>
        <IconButton className="header__icon">
          <Create />
        </IconButton>
        <IconButton className="header__icon">
          <People />
        </IconButton>
        <IconButton className="header__icon">
          <Notifications />
        </IconButton>

        <div className="search">
          <div className="searchIcon">
            <Search />
          </div>
          <InputBase placeholder="Search Quora…" inputProps={{ 'aria-label': 'search' }} />
        </div>

        <Button className="header__button">try quora</Button>

        <IconButton className="header__icon">
          <Language />
        </IconButton>

        <IconButton className="header__icon">
          <ExpandMore />
        </IconButton>

        <Button className="header__button header__button--addQuestion">
          Add question
        </Button>
      </Toolbar>
    </AppBar>
    </div>
    
  );
}

export default Header;


