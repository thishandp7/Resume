"use strict";

var React = require('react');
var Hexogon = require('../HeaderContent/Hexogon');
var Content = require('./Data');
var LineDesign = require('./LineDesign');


var education = {
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

var educationUpper = {
  top: "65px",
  left:"50px",
  position:"relative",
};

var educationIcon = {
  position: "absolute",
  fontSize: "26px",
  top:"2px",
  left:"3px",
  zIndex: "1",
  color:"white",
  width:"1px",
};

var educationHex = {
  position: "relative",
  left:"-46.5px",
  top: "49px",
};

var eduHex = {
  position: "absolute",
};

var upperEduHex = {
  position: "relative",
  top: "62px",
  left: "-60px"
};

var educationHeader = {
  position: "absolute",
  top:"-10px",
  left: "160px",
  opacity: "0",
};

var educationContent = {
  position: "absolute",
  top: "65px",
};
var educationLineDesign = {
  position: 'absolute',
  left:'110px',
  top: '5px',
  opacity: '0',
}

const DateTag = () =>{
  return(
    <div style={{position:"absolute", top:"-5px", left: "760px", }}>
      <svg width="125">
        <polygon points="15,10 130,10 130,35 15,35 0,22" fill="#b9c9ea"/>
      </svg>
    </div>
  );
}

class EducationList extends React.Component{

  componentDidMount(){

    var showList = true;
    var hideList = false;
    var scrollTopList;
    var winHeightList;
    var edPosList;

    $(window).scroll(function(){

      scrollTopList = $(window).scrollTop();
      winHeightList = $(window).height();
      edPosList = $('.educationHexUpper').offset().top;

      if((scrollTopList + winHeightList) > edPosList && showList){
        $('.ed-info').delay(550).animate({left: "0px"});
        $('.ed-gradDate').delay(550).animate({left: "90px"});
        showList = false;
        hideList = true;
      }
      else if((scrollTopList + winHeightList) < edPosList && hideList){
        $('.ed-info').animate({left: "400px"});
        $('.ed-gradDate').animate({left: "-500px"});
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
            this.props.data.map(function(ed ,i){
              return <li key={i}>
                      <div style={upperEduHex}>
                        <div className="eduHex" style={eduHex}>
                          <Hexogon width={"420"} dims={"0 0 2500 2500"}/>
                        </div>
                      </div>
                      <div className="ed-info" style={{position: "relative", width: "400px", left: "400px"}}>
                        <h3><b>{ed.title}</b></h3>
                        <span>{ed.college} - {ed.location} {ed.gpa}</span>
                      </div>
                      <div className="ed-gradDate" style={{position:"relative", top:"-60px", left:"-500px", width:"120px"}}>
                        <h4 style={{position:"absolute", top:"-1px", left:"790px", zIndex:'1', width:"120px"}}>{ed.gradDate}</h4>
                        <DateTag />
                      </div>
                    </li>
            })
          }
        </ul>
      </div>
    );
  }
}


class Education extends React.Component{

  getInitalState(){
    return {data: {edu: []}};
  };

  loadData() {
      this.setState({data: Content.Education});
  };

  componentWillMount(){
    this.loadData();
  }

  componentDidMount(){

    var show = true;
    var hide = false;
    var scrollTop;
    var winHeight;
    var edPos;

    $('.education-content').hide();

    $(window).scroll(function(){

      scrollTop = $(window).scrollTop();
      winHeight = $(window).height();
      edPos = $('.educationHexUpper').offset().top;



      if((scrollTop + winHeight) > edPos && show){
        $('.educationHexUpper').addClass('animate');
        $('.education').hide().delay(150).fadeIn(100).animate({width: "1043px"});
        $('.education-header').delay(150).animate({left:"5px", opacity: 1});
        $('.educationLineDesign').delay(400).animate({left:"790px", opacity: 1});
        $('.education').animate({height: "335px"});
        $('.education-content').delay(400).fadeIn(500);
        show = false;
        hide = true;
      }
      else if((scrollTop + winHeight) < edPos && hide){
        $('.educationHexUpper').removeClass('animate');
        $('.education').delay(200).fadeOut(100).animate({width: "0px"});
        $('.education-header').delay(100).animate({left:"0px", opacity: 0});
        $('.educationLineDesign').delay(400).animate({left:"110px", opacity: 0});
        $('.education').animate({height: "0px"});
        $('.education-content').delay(400).fadeOut(500);
        hide = false;
        show = true;
      }
    });

  };

  render(){
    return(

      <div className="educationUpper" style={educationUpper}>
        <div className="educationHexUpper" >
          <span className="education-Icon" style={educationIcon}>
            <i className="fa fa-graduation-cap" aria-hidden="false"></i>
          </span>
          <div className="educationHex" style={educationHex}>
            <Hexogon width={"420"} dims={"0 0 800 800"}/>
          </div>
        </div>
        <div className="education" style={education}>
          <div className="educationLineDesign" style={educationLineDesign}>
            <LineDesign />
          </div>
          <h1 className="education-header" style={educationHeader}>EDUCATION</h1>
          <div className="education-content" style={educationContent}>
            <EducationList data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = Education;
