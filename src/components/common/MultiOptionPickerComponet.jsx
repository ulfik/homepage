import React from 'react';

class MultiOptionPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedList: []};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(element) {
    const setIngrediends = this.props.setIngrediends;
    const selectedList = this.state.selectedList;
    if(selectedList.includes(element)){
      const index = selectedList.indexOf(element);
      selectedList.splice(index, 1);
    } else {
      selectedList.push(element);
    }
    this.setState({selectedList});
    setIngrediends(selectedList);
  }

  render(){
    const type = this.props.type;
    return <div>
      {type.map(element=>
        <button 
        key={element}
        onClick={() => this.handleClick(element)}
        className={this.state.selectedList.includes(element) ? "btn btn-success" : "btn btn-dark"}>
        {element}
        </button>
      )}
      
    </div>
  }
}

export default MultiOptionPickerComponent;