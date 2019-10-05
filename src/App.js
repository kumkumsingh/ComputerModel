import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import { connect } from 'react-redux'
import ModelDetails from './Component/ModelDetails';

class App extends React.Component {

  state = {
    selectedvalue:''
  }
  updateSelection = (event) => {
    console.log('selected item:', event.target.value)
    this.setState({ selectedvalue: event.target.value })
  }
  handleClick = () => {
    this.props.dispatch({
      type: 'SELECTED-ITEM',
      payload:this.state.selectedValue

    })
  }
  render() {
    console.log("checking props", this.props.model)
    console.log("checking state", this.state)
    return (
      <div className="App-Header">
      <ModelDetails/>
        <select onChange={this.updateSelection}>
          {/* with map getting TypeError: this.props.model.map is not a function while clicking on button */}
          
          <option>--pick up a model --</option>
          {this.props.model.map(item => {
            return <option key={item.id}>{item.name} {`(${item.year})`}</option>
          })}
        </select>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    model: state
  }
}

export default connect(mapStateToProps)(App)