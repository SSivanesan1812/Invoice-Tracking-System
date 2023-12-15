
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header=()=>{
    const logo="https://dashboard.getinvoice.co/dboard/img/logo.png";
    
    return (
        <AppBar color='primary' position='static'>
        <Toolbar>
            <img src={logo} alt="logo" style={{width:120}}/>
        </Toolbar>
        </AppBar>
    )
}

export default Header;