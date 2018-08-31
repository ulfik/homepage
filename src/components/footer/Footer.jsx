import React from 'react';

class Footer extends React.Component {
  render(){
    const footer = this.props.footer;
    return <div>{footer.contact}</div>
  }
};

export default Footer;