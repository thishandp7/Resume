"use strict";

var React = require('react');
var Hexogon = require('../HeaderContent/Hexogon');
var Content = require('./Data');
var LineDesign = require('./LineDesign');

var summeryLineDesign = {
  position: 'absolute',
  left:'110px',
  top: '5px',
  opacity: '0',
}

class Summery extends React.Component{

  componentDidMount(){

    $('.summeryHexUpper').addClass('animate');
    $('.summery').hide().fadeIn(100).animate({width: "1043px"});
    $('.summery-header').delay(650).animate({left:"5px", opacity: 1});
    $('.summeryLineDesign').delay(650).animate({left:"790px", opacity: 1});
    $('.summery').animate({height: "165px"});
    $('.summery-content').hide().delay(950).fadeIn(500);


  };

  render(){
    return(
      <div className="summeryUpper">
        <div className="summeryHexUpper">
          <span className="summery-Icon">
            <i className="fa fa-file-text" aria-hidden="false"></i>
          </span>
          <div className="summeryHex">
            <Hexogon width={"420"} dims={"0 0 800 800"}/>
          </div>
        </div>
        <div className="summery">
          <div className="summeryLineDesign" style={summeryLineDesign}>
            <LineDesign />
          </div>
          <h1 className="summery-header">SUMMERY</h1>
          <div className="summery-content">
            {Content.Summery}
          </div>
        </div>
      </div>
    );
  }
};

module.exports = Summery;
