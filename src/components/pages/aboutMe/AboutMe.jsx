import React from 'react';
import aboutMeModel from '../../../model/aboutMeModel';
import Chart from './Chart';
import MyPhoto from '../../../images/MyPhoto.jpg';
import FontAwesome from 'react-fontawesome';


class AboutMe extends React.Component {
  render(){
    return <div className="contentSize app" id="appAboutMe">     
      <div className='row'>
        <div className='col-4 marginTop aboutMeBackground'>
          <p className='display-4 text-center'>{aboutMeModel.title}</p>
          <img className="rounded mx-auto d-block " alt='me' src={MyPhoto}/>
          <p className='lead mt-2 text-justify' >{aboutMeModel.text}</p>
          <p className='lead mt-2 text-justify' >{aboutMeModel.hobby}</p>

        </div>
        <div className='col-7 chartMargin'>
          <Chart />
          <div className='marginLeft marginTop'>  
            <FontAwesome className='animations' name='github'size='2x'/>        
            <a href='https://github.com/ulfik'  rel="noopener noreferrer" target="_blank" className='marginTop marginLeft lead text-white'> 
              GitHub
            </a>
          </div>
          <div className='marginLeft marginTop'>
            <FontAwesome className='animations' name='linkedin'size='2x'/>
            <a href='https://www.linkedin.com/in/urszula-jaworska/'  rel="noopener noreferrer" target="_blank" className='marginTop marginLeft lead text-white'> 
              Linkedin
            </a>
          </div>
          <div className='marginLeft marginTop'>
            <FontAwesome className='animations' name='rocket'size='2x'/>
            <a href='https://www.codewars.com/users/ulfik'  rel="noopener noreferrer" target="_blank" className='marginTop marginLeft lead text-white'> 
              Codewars
            </a>
          </div>
          <div className='marginLeft marginTop'>
            <FontAwesome className='animations' name='paw'size='2x'/>
            <a href='http://maciejszpak.pl'  rel="noopener noreferrer" target="_blank" className='marginTop marginLeft lead text-white'> 
              My project
            </a>
          </div>
        </div>
      </div>
    </div>
  }
};

export default AboutMe;