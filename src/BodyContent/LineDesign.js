"use strict";

var React = require('react');

class LineDesign extends React.Component{
  render(){
    return(
        <div className="lineDesign">
          <svg id="lineDesignStyling" width="300" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,5 195,5 215,40 200,40 180,5"  fill="none" stroke="#437bda" style={{strokeWidth:'2'}}/>
            <line x1="215" y1="5" x2="235" y2="40"  stroke="#437bda" style={{strokeWidth:'2'}}/>
          </svg>
        </div>
    );
  }
}

module.exports = LineDesign;
