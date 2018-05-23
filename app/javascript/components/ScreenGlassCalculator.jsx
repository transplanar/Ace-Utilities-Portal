import React from "react"
import PropTypes from "prop-types"
import _ from 'lodash'

const APPROVAL_REQUIRED = "Area Exceeds 12 Square Feet. Manager Approval Required";

class ScreenGlassCalculator extends React.Component {
  constructor(props){
    super(props);

    this.options = {
      glassSingle: {
        label: 'Glass - Single Strength',
        cost: ((area) => {return area * 3.75})
      },
      glassDouble: {
        label: 'Glass - Double Strength',
        cost: ((area) => {return area * 4.25})
      },
      screenNew: {
        label: "Screen - New",
        cost: (area) => {return this.getNewScreenCost(area)}
      },
      screenRepair: {
        label: "Screen - Repair",
        cost: (area) => {return area * 2.25}
      }
    };

    this.state = {
      width: 0,
      height: 0,
      currentOption: this.options.glassSingle,
      optionsContent: null,
      cost: null
    };

    this.handleInput = this.handleInput.bind(this);
    this.selectMode = this.selectMode.bind(this);
  }

  componentDidMount(){
    var options = this.generateSelectorOptions();

    this.setState({
      optionsContent: options
    });
  }

  generateSelectorOptions(){
    return _.map(this.options, (option)=>{
      return <option key={option.label} value={option.label}>{option.label}</option>
    });
  }

  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getNewScreenCost(area){
      let result = 0;

      if(area > 12){
        result = APPROVAL_REQUIRED;
      }
      else if(area > 10){
         result = 31;
      }else if(area > 8){
         result = 26;
      }else if(area > 6){
          result = 22;
      }else if(area > 4){
          result = 16.5;
      }else if(area > 2){
          result = 12;
      }else{
          result = 7;
      }

      return result;
  }

  getCost(){
    var area = this.getarea();
    var rawCost = this.state.currentOption.cost(area);

    if(rawCost == APPROVAL_REQUIRED){
      return APPROVAL_REQUIRED;
    }

    var formattedCost = `$${rawCost.toFixed(2)}`;

    return formattedCost;
  }

  getError(){
      return <div>{this.state.error}</div>
  }

  selectMode(event){
    var label = event.target.value;
    var option = _.find(this.options, {label: label});

    this.setState({
      currentOption: option
    });
  }

  //Required accessor to resolve after width/height set by handleInput()
  getArea(){
    var result = (this.state.width * this.state.height) / 144

    return result.toFixed(2);
  }

  render () {
    return (
      <React.Fragment>
        <h1>Square Foot Calculator</h1>
        <select id='option' onChange={this.selectMode} value={this.state.currentOption.label}>
          {this.state.optionsContent}
        </select>

        Width (inches): <input type='number' value={this.state.width} name = 'width' onChange={this.handleInput} />
        Height (inches): <input type='number' value={this.state.height} name = 'height' onChange={this.handleInput} />
        <div>
          Area: {this.getArea() + " ft²"}
        </div>
        {this.state.error ? this.getError() : <div>Cost: {this.getCost()}</div>}
      </React.Fragment>
    );
  }
}

export default ScreenGlassCalculator;
