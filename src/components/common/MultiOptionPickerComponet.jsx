import React from 'react';

class MultiOptionPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(element) {
    const selectedList = this.props.selectedList;
    const deleteElement = this.props.deleteElement;
    const addElement = this.props.addElement;

    if(selectedList.includes(element)){
      deleteElement(element);
    } else {
      addElement(element);
    }
  }

  render(){
    const supplies = this.props.supplies;
    const selectedList = this.props.selectedList;
    return <div>
      {supplies.map(element=>
        <button 
        key={element}
        onClick={() => this.handleClick(element)}
        className={selectedList.includes(element) ? "btn btn-success" : "btn btn-dark"}>
        {element}
        </button>
      )}
      
    </div>
  }
}

export default MultiOptionPickerComponent;