import React from 'react';
import contactModel from '../../../model/contactModel';
import FontAwesome from 'react-fontawesome';

class Contact extends React.Component {
  render(){
    return <div className='col app contentSize' id='appContact'>
      <div className='marginTop display-4'>{contactModel.contact.name}</div> 
      <div className='lead mt-4'>
      phone number: <FontAwesome name='phone'size='1x'/> {contactModel.contact.phone}</div> 
      <div className='lead'>e-mail: <FontAwesome name='at'size='1x'/> {contactModel.contact.email}</div>
    </div>
  }
};

export default Contact;