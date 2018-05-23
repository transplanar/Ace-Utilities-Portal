import React from "react"
import PropTypes from "prop-types"
import _ from 'lodash';

import SocialMediaMessageBuilder from "./SocialMediaMessageBuilder"
import ScreenGlassCalculator from "./ScreenGlassCalculator"


class App extends React.Component {
  constructor(props){
    super(props);

    this.modes = {
      socialMedia: {
          label: "Social Media Message Builder",
          content: <SocialMediaMessageBuilder />
      },
      ScreenGlassCalculator: {
        label: 'Screen Cost Calculator',
        content: <ScreenGlassCalculator />
      }
    };

    this.state = {
        // mode: this.modes.socialMedia,
        mode: this.modes.ScreenGlassCalculator,
        navButtons: ''
    };
  }

  componentDidMount(){
    this.renderNavButtons();
  };

  renderNavButtons(){
    var navButtons = _.map(this.modes, (mode) => {
      var label = mode.label;
      return <button key={label} onClick={()=>this.selectMode(mode)}>{label}</button>;
    });

    this.setState({
      navButtons: navButtons
    });
  }

  selectMode(mode){
      if(_.includes(this.modes, mode)){
        this.setState({
            mode: mode
        });
      }else{
        console.warn(`Invalid mode supplied: ${JSON.stringify(mode)}`);
      }
  };

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
}

export default App;
