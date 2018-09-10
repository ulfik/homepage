import React from 'react';
import NavbarButtons from './NavbarButtons';

class Navbar extends React.Component {
  render(){
    const navbar = this.props.navbar;
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <NavbarButtons navbarButtons={navbar.buttons}/>
    </nav>
  }
};

export default Navbar;