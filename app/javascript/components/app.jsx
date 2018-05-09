import React from "react"
import PropTypes from "prop-types"
import _ from 'lodash';

import SocialMediaMessageBuilder from "./SocialMediaMessageBuilder.jsx"
// import HourlyCalculator from "./HourlyCalculator.jsx"
// import SquareFootCalculator from "./SquareFootCalculator.jsx"

const numNavButtons = 1;
const modes = {
    default: {
      label: 'Default Mode',
      content: <div>No mode selected</div>
    },
    socialMedia: {
        label: 'Social Media Builder',
        content: <SocialMediaMessageBuilder />
    }
}

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
        mode: modes.default
    };
  }
  
  selectMode(mode){
      let newMode = '';
      switch(mode){
        case modes.socialMedia.label:
            break;
        default:
            console.warn(`Invalid mode ${mode}`);
            break;
      }
      
      this.setState({
          mode: newMode
      })
  }
  
  generateNavButtons(){
      let arr = _.range(numNavButtons);
      let buttons = [];
      
    //   let options = _.map(SELECT_BOX_OPTIONS, (elem, index)=>{
    //       return <option key={index} value={elem}>{elem}</option>; 
    //     });

      
      _.each(arr, (elem, index)=>{
          let btn = <button key={index} onClick={()=>this.selectMode(modes.socialMedia.label) }>{modes.socialMedia.label}</button>
          buttons << btn;
      });
    

      return buttons;
  }
  
  handleChange(event){
   
  }
  
  render () {
    return (
      <div id="app">
        <div id='nav'>
            {this.generateNavButtons()}
        </div>
        <div id='body'>
            {this.state.mode.content}
        </div>
      </div>
    );
  }
}

export default App;