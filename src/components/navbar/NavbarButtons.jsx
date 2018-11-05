import React from 'react';
import NavbarButton from './NavbarButton';

function NavbarButtons(props){
  const navbarButtons = props.navbarButtons;
  return <div>
    <ul className="navbar-nav mr-auto">
      {navbarButtons.map(element=><NavbarButton key={element.name} navbarButton={element}/>)}
    </ul>
  </div>
};

export default NavbarButtons;