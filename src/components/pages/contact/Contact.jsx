import React from 'react';
import contactModel from '../../../model/contactModel';

class Contact extends React.Component {
  render(){
    return <div>
      <div>{contactModel.contact.phone}</div>
      <div>{contactModel.contact.email}</div> 
      <div>{contactModel.map}</div>  
    </div>
  }
};

export default Contact;