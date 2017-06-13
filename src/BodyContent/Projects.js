"use strict";

var React = require('react');
var Hexogon = require('../HeaderContent/Hexogon');
var Content = require('./Data');
var LineDesign = require('./LineDesign');


var projects = {
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

var projectsUpper = {
  top: "65px",
  left:"50px",
  position:"relative",
};

var projectsIcon = {
  position: "absolute",
  fontSize: "26px",
  top:"0px",
  left:"5px",
  zIndex: "1",
  color:"white",
  width:"1px",
};

var projectsHex = {
  position: "relative",
  left:"-46.5px",
  top: "49px",
};

var proHex = {
  position: "absolute",
};

var upperProHex = {
  position: "relative",
  top: "62px",
  left: "-60px"
};

var projectsHeader = {
  position: "absolute",
  top:"-10px",
  left: "160px",
  opacity: "0",
};

var projectsContent = {
  position: "absolute",
  top: "65px",
};

var projectsLineDesign = {
  position: 'absolute',
  left:'110px',
  top: '5px',
  opacity: '0',
}

const DateTag = () =>{
  return(
    <div style={{position:"absolute", top:"15px", left: "695px", }}>
      <svg width="225">
        <polygon points="15,10 190,10 190,35 15,35 0,22" fill="#b9c9ea"/>
      </svg>
    </div>
  );
}

class ProjectList extends React.Component{

  componentDidMount(){

    var showList = true;
    var hideList = false;
    var scrollTopList;
    var winHeightList;
    var poPosList = 1640;

    $(window).scroll(function(){

      scrollTopList = $(window).scrollTop();
      winHeightList = $(window).height();

      if((scrollTopList + winHeightList) > poPosList && showList){
        $('.pro-info').delay(550).animate({left: "0px"});
        $('.pro-period').delay(550).animate({left: "90px"});
        showList = false;
        hideList = true;
      }
      else if((scrollTopList + winHeightList) < poPosList && hideList){
        $('.pro-info').delay(550).animate({left: "400px"});
        $('.pro-period').delay(550).animate({left: "-500px"});
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
            this.props.data.map(function(pro, i){
            return <li key={i}>
            <div style={upperProHex}>
              <div className="proHex" style={proHex}>
                <Hexogon width={"420"} dims={"0 0 2500 2500"}/>
              </div>
            </div>
            <div className="pro-period" style={{position:"relative", top:"-25px", left:"-500px", width:"220px"}}>
              <h4 style={{position:"absolute", top:"18px", left:"715px", zIndex:'1', width:"220px"}}>{pro.period}</h4>
              <DateTag />
            </div>
            <div className="pro-info" style={{position: "relative", width: "600px", left: "150px"}}>
              <h3><b>{pro.name}</b></h3>
              <span>{pro.description}</span>
            </div>
            </li>
          })
        }
        </ul>
      </div>
    );
  }
}

class Projects extends React.Component{

  getInitalState(){
    return {data: {pro: []}};
  };

  loadData() {
    this.setState({data: Content.Projects});
  };

  componentWillMount(){
    this.loadData();
  }

  componentDidMount(){

    var show = true;
    var hide = false;
    var scrollTop;
    var winHeight;
    var poPos = 1640;

    $('.projects-content').hide();

    $(window).scroll(function(){

      scrollTop = $(window).scrollTop();
      winHeight = $(window).height();

      if((scrollTop + winHeight) > poPos && show){
        $('.projectsHexUpper').addClass('animate');
        $('.projects').hide().fadeIn(150).animate({width: "1043px"});
        $('.projects-header').delay(150).animate({left:"5px", opacity: 1});
        $('.projectsLineDesign').delay(400).animate({left:"790px", opacity: 1});
        $('.projects').animate({height: "205px"});
        $('.projects-content').delay(400).fadeIn(500);
        show = false;
        hide = true;
      }
      else if((scrollTop + winHeight) < poPos && hide){
        $('.projectsHexUpper').removeClass('animate');
        $('.projects').fadeOut(200).animate({width: "300px"});
        $('.projects-header').delay(100).animate({left:"0px", opacity: 0});
        $('.projectsLineDesign').delay(400).animate({left:"110px", opacity: 0});
        $('.projects').animate({height: "70px"});
        $('.projects-content').delay(400).fadeOut(500);
        hide = false;
        show = true;
      }
    });

  };

  render(){
    return(
      <div className="projectseUpper" style={projectsUpper}>
        <div className="projectsHexUpper" >
          <span className="projects-Icon" style={projectsIcon}>
            <i className="fa fa-code" aria-hidden="true"></i>
          </span>
          <div className="projectsHex" style={projectsHex}>
            <Hexogon width={"420"} dims={"0 0 800 800"}/>
          </div>
        </div>
        <div className="projects" style={projects}>
          <div className="projectsLineDesign" style={projectsLineDesign}>
            <LineDesign />
          </div>
          <h1 className="projects-header" style={projectsHeader}>PROJECTS</h1>
          <div className="projects-content" style={projectsContent}>
            <ProjectList data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Projects;
