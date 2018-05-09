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
        mode: modes.default,
        navButtons: []
    };
  }
  
//   componentDidMount(){
//     let buttons = this.generateNavButtons();
    
//     this.setState({
//       navButtons: buttons
//     });
//   }
  
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
      });
  }
  
//   generateNavButtons(){
//       let arr = _.range(numNavButtons);
//       let buttons = [];
      
//       _.each(arr, (elem, index)=>{
//           let btn = <button key={index} text={modes.socialMedia.label} onClick={()=>this.selectMode(modes.socialMedia.label)}></button>
//           buttons << btn;
//       });
    

//       return buttons;
//   }
  
  handleChange(event){
   
  }
  
  render () {
    return (
      <div id="app">
        <div id='nav'>
            <button key={modes.socialMedia.label} text={modes.socialMedia.label} onClick={()=>this.selectMode(modes.socialMedia.label)}>Button</button>
        </div>
        <div id='body'>
            {this.state.mode.content}
        </div>
      </div>
    );
  }
}

export default App;