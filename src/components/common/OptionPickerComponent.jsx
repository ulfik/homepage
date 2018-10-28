import React from 'react';

class OptionPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedType: props.value};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(element, event) {
    const setElement = this.props.setElement;
    this.setState({selectedType: element.type});
    setElement(element);
    event.stopPropagation();
  }

  render(){
    const {types, vertical} = this.props;
    return <div  className={vertical ? "btn-group-vertical" : "btn-group"}>
      {types.map(element=>
        <button onClick={(event) => this.handleClick(element, event)} 
          key={element.type}
          className={element.type === this.state.selectedType ? "btn btn-warning" : "btn btn-dark"}>
          {element.text}
        </button>
      )}
    </div>
  }
};

export default OptionPickerComponent;