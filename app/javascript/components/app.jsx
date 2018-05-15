import React from "react"
import PropTypes from "prop-types"
import _ from 'lodash';

import SocialMediaMessageBuilder from "./SocialMediaMessageBuilder.jsx"
// import HourlyCalculator from "./HourlyCalculator.jsx"
// import SquareFootCalculator from "./SquareFootCalculator.jsx"

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

const numNavButtons = 1;

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
        mode: modes.socialMedia,
        navButtons: ''
    };
  }
  
  componentDidMount(){
    var navButtons = _.range(numNavButtons).map((elem,index)=>{
      return <button key={index} onClick={()=>this.selectMode(modes.socialMedia.label)}>{modes.socialMedia.label}</button>;
    });
    
    this.setState({
      navButtons: navButtons
    });
  }
  
  selectMode(mode){
      let newMode = '';
      switch(mode){
        case modes.socialMedia.label:
            newMode = modes.socialMedia;
            break;
        default:
            console.warn(`Invalid mode ${mode}`);
            break;
      }
      
      this.setState({
          mode: newMode
      });
  }
  
  // // generateNavButtons(){
  // //     console.log(`Nav button number ${numNavButtons}`);
  // //     var arr = _.range(numNavButtons);
  // //     var buttons = [];
      
  // //     console.log(`Generate from array "${arr}"`);
      
  // //     _.each(arr, (elem, index)=>{
  // //         // console.log(`Pushing button for index ${index}`);
  // //         // var btn = 
  // //         // console.log(`Adding new thingy "${btn}"`);
  // //         // buttons << btn;
  // //         buttons << (<button key={index} text={modes.socialMedia.label} onClick={()=>this.selectMode(modes.socialMedia.label)}>{modes.socialMedia.label}</button>)
  // //     });
      
  // //     console.log(`Buttons "${buttons}"`);
    
  // //     return buttons;
  // // }
  
  // handleChange(event){
   
  // }
  
  render () {
    return (
      <div id="app">
        <div id='nav'>
            {this.state.navButtons}
        </div>
        <div id='body'>
            {this.state.mode.content}
        </div>
      </div>
    );
  }
  
  // <button key={modes.socialMedia.label} text={modes.socialMedia.label} onClick={()=>this.selectMode(modes.socialMedia.label)}>Button</button>
}

export default App;