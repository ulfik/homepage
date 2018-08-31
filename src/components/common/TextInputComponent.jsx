import React from 'react';


class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const setValue = this.props.setValue;
    this.setState({value: event.target.value});
    setValue(event.target.value);
    event.stopPropagation();
  }


  render(){
    const {label, placeholder} = this.props;
    return <div>
        <label>
          {label}
          <input type="number" placeholder={placeholder} value={this.state.value} onChange={this.handleChange} />
        </label>
    </div>
  }
};

export default TextInputComponent;