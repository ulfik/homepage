import React from 'react';


class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const setValue = this.props.setValue;
    setValue(event.target.value);
    event.stopPropagation();
  }

  render(){
    const {label, placeholder, type, onKeyPress, value} = this.props;
    return <div>
        <label>
          {label}
          <input 
            type={type} 
            placeholder={placeholder} 
            value={value !== null ? value : ''} 
            onChange={this.handleChange} 
            onKeyPress={onKeyPress}/>
        </label>
    </div>
  }
};

export default TextInputComponent;