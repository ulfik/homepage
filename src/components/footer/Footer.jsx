import React from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends React.Component {
  render(){
    const footer = this.props.footer;
    return <div className="row footer"><p className="mt-3 ml-3 text-warning"><FontAwesome name='rocket'/> {footer.contact}</p></div>
  }
};

export default Footer;