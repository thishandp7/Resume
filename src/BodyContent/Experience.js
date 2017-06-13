"use strict";

var React = require('react');
var Hexogon = require('../HeaderContent/Hexogon');
var Content = require('./Data');
var LineDesign = require('./LineDesign');


var experience = {
    marginBottom: "15px",
    position:"relative",
    backgroundColor: "white",
    width:"300px",
    height: "70px",
    top: "-10px",
    left:"6px",
    padding: "1px 10px 20px 5px",
    boxShadow: "1px 1px 2px #888888",
    borderRadius: "3px",
    zIndex: "-2"
};

var experienceUpper = {
  top: "65px",
  left:"50px",
  position:"relative",
};

var experienceIcon = {
  position: "absolute",
  fontSize: "24px",
  top:"1px",
  left:"5px",
  zIndex: "1",
  color:"white",
  width:"1px",
};

var experienceHex = {
  position: "relative",
  left:"-46.5px",
  top: "49px",
};

var expHex = {
  position: "absolute",
};

var upperExpHex = {
  position: "relative",
  top: "62px",
  left: "-60px"
};

var experienceHeader = {
  position: "absolute",
  top:"-10px",
  left: "160px",
  opacity: "0",
};

var experienceContent = {
  position: "absolute",
  top: "65px",
};

var experienceLineDesign = {
  position: 'absolute',
  left:'110px',
  top: '5px',
  opacity: '0',
}

const DateTag = () =>{
  return(
    <div style={{position:"absolute", top:"15px", left: "695px", }}>
      <svg width="225">
        <polygon points="15,10 195,10 195,35 15,35 0,22" fill="#b9c9ea"/>
      </svg>
    </div>
  );
}

class ExperienceList extends React.Component{

  componentDidMount(){

    var showList = true;
    var hideList = false;
    var scrollTopList;
    var winHeightList;
    var exPosList = 780;

    $(window).scroll(function(){

      scrollTopList = $(window).scrollTop();
      winHeightList = $(window).height();

      if((scrollTopList + winHeightList) > exPosList && showList){
        $('.ex-info').delay(550).animate({left: "0px"});
        $('.ex-gradDate').delay(550).animate({left: "90px"});
        showList = false;
        hideList = true;
      }
      else if((scrollTopList + winHeightList) < exPosList && hideList){
        $('.ex-info').delay(550).animate({left: "400px"});
        $('.ex-gradDate').delay(550).animate({left: "-500px"});
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
            this.props.data.map(function(ex, i){
              return <li key={i}>
                <div style={upperExpHex}>
                  <div className="expHex" style={expHex}>
                    <Hexogon width={"420"} dims={"0 0 2500 2500"}/>
                  </div>
                </div>
                <div className="ex-gradDate" style={{position:"relative", top:"-25px", left:"-500px", width:"220px"}}>
                  <h4 style={{position:"absolute", top:"18px", left:"710px", zIndex:'1', width:"220px"}}>{ex.period}</h4>
                  <DateTag />
                </div>
                <div className="ex-info" style={{position: "relative", width: "400px", left: "150px"}}>
                  <h3 style={{width:"600px"}}><b>{ex.companyName} - {ex.location}</b></h3>
                  <h4>{ex.title}</h4>
                  <ul style={{listStyleType: "disc"}}>
                    {
                      ex.description.map(function(de, j){
                        return <li key={j} style={{width:"700px"}}>{de.line}</li>
                      })
                    }
                  </ul>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}


class Experience extends React.Component{

  getInitalState(){
    return {data: {exp: []}};
  };

  loadData() {
      this.setState({data: Content.Experience});
  };

  componentWillMount(){
    this.loadData();
  }

  componentDidMount(){

    var show = true;
    var hide = false;
    var scrollTop;
    var winHeight;
    var exPos = 780;

    $('.experience-content').hide();

    $(window).scroll(function(){

      scrollTop = $(window).scrollTop();
      winHeight = $(window).height();

      if((scrollTop + winHeight) > exPos && show){
        $('.experienceHexUpper').addClass('animate');
        $('.experience').hide().fadeIn(150).animate({width: "1043px"});
        $('.experience-header').delay(150).animate({left:"5px", opacity: 1});
        $('.experienceLineDesign').delay(400).animate({left:"790px", opacity: 1});
        $('.experience').animate({height: "845px"});
        $('.experience-content').delay(400).fadeIn(500);
        show = false;
        hide = true;
      }
      else if((scrollTop + winHeight) < exPos && hide){
        $('.experienceHexUpper').removeClass('animate');
        $('.experience').fadeOut(200).animate({width: "300px"});
        $('.experience-header').delay(100).animate({left:"0px", opacity: 0});
        $('.experienceLineDesign').delay(400).animate({left:"110px", opacity: 0});
        $('.experience').animate({height: "70px"});
        $('.experience-content').delay(400).fadeOut(500);
        hide = false;
        show = true;
      }
    });

  };

  render(){
    return(

      <div className="experienceUpper" style={experienceUpper}>
        <div className="experienceHexUpper" >
          <span className="experience-Icon" style={experienceIcon}>
            <i className="fa fa-cubes" aria-hidden="false"></i>
          </span>
          <div className="experienceHex" style={experienceHex}>
            <Hexogon width={"420"} dims={"0 0 800 800"}/>
          </div>
        </div>
        <div className="experience" style={experience}>
          <div className="experienceLineDesign" style={experienceLineDesign}>
            <LineDesign />
          </div>
          <h1 className="experience-header" style={experienceHeader}>EXPERIENCE</h1>
          <div className="experience-content" style={experienceContent}>
            <ExperienceList data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
};


module.exports = Experience;
