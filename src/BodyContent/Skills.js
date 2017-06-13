"use strict";

var React = require('react');
var Hexogon = require('../HeaderContent/Hexogon');
var Content = require('./Data');
var LineDesign = require('./LineDesign');
var _ = require('underscore');


var skills = {
    marginBottom: "15px",
    position:"relative",
    backgroundColor: "white",
    width:"400px",
    height: "70px",
    top: "-10px",
    left:"6px",
    padding: "1px 10px 20px 5px",
    boxShadow: "1px 1px 2px #888888",
    borderRadius: "3px",
    zIndex: "-2"
};

var skillsUpper = {
  top: "65px",
  left:"50px",
  position:"relative",
};

var skillsIcon = {
  position: "absolute",
  fontSize: "26px",
  top:"1px",
  left:"8.5px",
  zIndex: "1",
  color:"white",
  width:"1px",
};

var skillsHex = {
  position: "relative",
  left:"-46.5px",
  top: "49px",
};

var skiHex = {
  position: "absolute",
  height:"10px"
};

var upperSkiHex = {
  position: "relative",
  top: "12px",
  left: "-60px",
};

var skillsHeader = {
  position: "absolute",
  top:"-10px",
  left: "160px",
  opacity: "0",
};

var skillsContent = {
  position: "absolute",
  top: "65px",
};

var skillsLineDesign = {
  position: 'absolute',
  left:'110px',
  top: '5px',
  opacity: '0',
}

const DateTag = () =>{
  return(
    <div style={{position:"absolute", top:"15px", left: "695px", }}>
      <svg width="325">
        <polygon points="15,10 190,10 190,35 15,35 0,22" fill="#b9c9ea"/>
      </svg>
    </div>
  );
}

const Progress = (props) =>{
  return(
    <div>
      <div  style={{backgroundColor:"red", height:"15px", width:"15px", position:"relative", marginRight:"7px"}}>
      </div>
    </div>
  );
}

class SkillsList extends React.Component{

  componentDidMount(){

    var showList = true;
    var hideList = false;
    var scrollTopList;
    var winHeightList;
    var skiPosList = 1855;

    $(window).scroll(function(){

      scrollTopList = $(window).scrollTop();
      winHeightList = $(window).height();

      if((scrollTopList + winHeightList) > skiPosList && showList){
        $('.ski-info').delay(550).animate({left: "0px"});
        //$('.levels').hide().delay(1100).animate({left: "250px"}).fadeIn(100);
        $('.levels').delay(700).animate({left: "250px"});
        showList = false;
        hideList = true;
      }
      else if((scrollTopList + winHeightList) < skiPosList && hideList){
        $('.ski-info').delay(550).animate({left: "400px"});
        $('.levels').delay(700).animate({left: "500px"});
        //$('.levels').hide().animate({left: "500px"});;
        hideList = false;
        showList = true;
      }
    });
  }

  render(){
    return(
      <div>
        <ul style={{listStyleType: "none"}}>
        {
            this.props.data.map(function(ski, i){
            return <li key={i} style={{marginBottom: "15px"}}>
            <div style={upperSkiHex}>
              <div className="skiHex" style={skiHex}>
                <Hexogon width={"25"} dims={"0 0 200 200"}/>
              </div>
            </div>
            <div className="ski-info" style={{position: "relative", width: "600px", left: "50px"}}>
              <h4>{ski.skill}</h4>
              <div className="levels" style={{position: "absolute", width: "600px", top:"0px", left: "500px"}}>
                <div>{
                  _.range(ski.skillLevel).map( j =>
                    <div key={j} style={{float:"left"}}>
                      <div className="parallelogram" style={{backgroundColor:"#437bda", height:"13px", width:"33px", position:"relative", marginRight:"10px"}}></div>
                    </div>
                  )}
                </div>
                <div style={{position:"absolute", color:"red", top:"0px", zIndex: "-1px"}}>{
                  _.range(12).map( j =>
                    <div key={j} style={{float:"left"}}>
                      <div className="parallelogram-gray" style={{backgroundColor:"lightGray", height:"13px", width:"33px", position:"relative", marginRight:"10px", zIndex:"-1"}}></div>
                    </div>
                  )}
              </div>
              </div>
            </div>
            </li>
          })
        }
        </ul>
      </div>
    );
  }
}

class Skills extends React.Component{

  getInitalState(){
    return {data: {ski: []}};
  };

  loadData() {
    this.setState({data: Content.TechnicalSkills});
  };

  componentWillMount(){
    this.loadData();
  }

  componentDidMount(){

    var show = true;
    var hide = false;
    var scrollTop;
    var winHeight;
    var skPos = 1855;

    $('.skills-content').hide();

    $(window).scroll(function(){

      scrollTop = $(window).scrollTop();
      winHeight = $(window).height();

      if((scrollTop + winHeight) > skPos && show){
        $('.skillsHexUpper').addClass('animate');
        $('.skills').hide().fadeIn(150).animate({width: "1043px"});
        $('.skills-header').delay(150).animate({left:"5px", opacity: 1});
        $('.skillsLineDesign').delay(400).animate({left:"790px", opacity: 1});
        $('.skills').animate({height: "905px"});
        $('.skills-content').delay(400).fadeIn(500);
        show = false;
        hide = true;
      }
      else if((scrollTop + winHeight) < skPos && hide){
        $('.skillsHexUpper').removeClass('animate');
        $('.skills').fadeOut(200).animate({width: "400px"});
        $('.skills-header').delay(100).animate({left:"0px", opacity: 0});
        $('.skillsLineDesign').delay(400).animate({left:"110px", opacity: 0});
        $('.skills').animate({height: "70px"});
        $('.skills-content').delay(400).fadeOut(500);
        hide = false;
        show = true;
      }
    });

  };

  render(){
    return(
      <div className="skillsUpper" style={skillsUpper}>
        <div className="skillsHexUpper" >
          <span className="skills-Icon" style={skillsIcon}>
            <i className="fa fa-sliders" aria-hidden="true"></i>
          </span>
          <div className="skillsHex" style={skillsHex}>
            <Hexogon width={"420"} dims={"0 0 800 800"}/>
          </div>
        </div>
        <div className="skills" style={skills}>
          <div className="skillsLineDesign" style={skillsLineDesign}>
            <LineDesign className="skillsLineDesign"/>
          </div>
          <h1 className="skills-header" style={skillsHeader}>TECHNICAL SKILLS</h1>
          <div className="skills-content" style={skillsContent}>
            <SkillsList data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Skills;
