import React from 'react';
import {
  Link, NavLink, withRouter
} from 'react-router-dom';

class NavbarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick() {
    this.setState({showDropdown: !this.state.showDropdown});
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({showDropdown: false});
    }
  }

  render(){
    const navbarButton = this.props.navbarButton;
    const pathname = this.props.location.pathname;
    if(navbarButton.link)
      return  <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to={navbarButton.link}>{navbarButton.name}</NavLink>
      </li>
    if(navbarButton.subitems)
      return  <li className="nav-item dropdown">
        <a className={pathname.includes("work") ? " dropdown-toggle nav-link active " : "dropdown-toggle nav-link"} 
          id="navbarDropdown" 
          role="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          onClick={this.handleClick}
          aria-expanded="false">{navbarButton.name}</a>
        <div ref={this.setWrapperRef} className={this.state.showDropdown ? "dropdown-menu show" : "dropdown-menu"} 
            aria-labelledby="navbarDropdown">
            {navbarButton.subitems.map(item =>
              <span className="dropdown-item" key={item.link}><Link to={item.link}>{item.name}</Link></span>
            )}
        </div>
      </li>

    return null;
  }
};

export default withRouter(NavbarButton);