$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');
//var MainPage = require('./Components/MainPage');

class ProfilePicture extends React.Component{

  componentDidMount(){
    let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(60,15);
    ctx.lineTo(100,35);
    ctx.stroke();

  }

  render(){
    return(
      <canvas ref="myCanvas" className="profilePic"></canvas>
    );
  }
};

const NamePlate = () => {
  return(
    <div className="name-Plate">
      <h1 className="myName">THISHAN D PATHMANATHAN</h1>
      <svg width="800" height="100">
        <defs>
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8"/>
          <feOffset dx=".5" dy="1" result="offsetblur"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        </defs>
        <polygon className="plate" filter="url(#drop-shadow)"
        points="85,35 700,35 730,100 725,100 717.5,85 85,85"/>
      </svg>

      <div className="subTitle">
        <span id="sTitleOne">Software Engineer</span>
        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
        <span id="sTitleTwo">Graphic Designer</span>
      </div>

      <svg className="plate-line" width="800" height="160">
        <defs>
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8"/>
          <feOffset dx=".5" dy="1" result="offsetblur"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        </defs>
        <polygon  filter="url(#drop-shadow)"
        points="145,40 600,40 620,80 615,80 597,45 145,45"/>
      </svg>

      <div className="contactInfo">
        <div  id="email">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span>tdpathmanathan@stcloudstate.edu</span>
        </div>
        <div  id="phone">
          <i className="fa fa-phone" aria-hidden="false"></i>
          <span>320.237.6857</span>
        </div>
      </div>

    </div>
  );
};

const Hexogon = (props) => {
    return(
      <svg className="hex" width="420" height="420" viewBox={props.dims} xmlns="http://www.w3.org/2000/svg">
        <defs>
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8"/>
          <feOffset dx=".5" dy="1" result="offsetblur"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        </defs>
        <polygon filter="url(#drop-shadow)"
        points="60,15 100,35 100,80 60,100 20,80 20,35"/>
      </svg>
    );
};

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <ProfilePicture />
        <Hexogon dims={"0 0 200 200"}/>
        <NamePlate />
      </div>
    );
  }
}


class MainPage extends React.Component{
  render (){
    return(
      <div>
        <Header />
      </div>
    );
  }
};

ReactDOM.render(<MainPage />, document.getElementById('main'));
