$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');
//var MainPage = require('./Components/MainPage');

class ProfilePicture extends React.Component{

  componentDidMount(){
    let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
    let ctx = canvas.getContext('2d');

    var c = 2;

    ctx.beginPath();
    ctx.moveTo(50 * c,5 * c);
    ctx.lineTo(90 * c,25 * c);
    ctx.lineTo(90 * c,70 * c);
    ctx.lineTo(50 * c,90 * c);
    ctx.lineTo(10 * c,70 * c);
    ctx.lineTo(10 * c,25 * c);
    ctx.closePath();
    ctx.stroke();
    ctx.clip();

    var img = new Image();

    img.onload = function() {
      ctx.drawImage(img, 20, 12, 165, 165);
    }
    img.src = './img/DP.jpg';
  }

  render(){
    return(
      <canvas ref="myCanvas" width="500" height="500" className="profilePic"></canvas>
    );
  }
};

class NamePlate extends React.Component {

  loadHeader(){
    $('.name-Plate').animate({width: "+=800px"});

    $('.myName').delay(200);
    $('.myName').hide().fadeIn(500).animate({top: "+=30px"}, {"duration":700, "queue": false});

    $('.plate-line').delay(200);
    $('.plate-line').animate({width: "+=800px"});

    $('.subTitle').delay(100).animate({top: "+=32px"}, "slow");
    $('#contactInfo-email').delay(200).animate({top: "+=30px"}, "slow");
    $('#contactInfo-phone').delay(300).animate({top: "+22px"}, "slow");
  };

  componentDidMount(){
    this.loadHeader();


    var index = 140;
    var scrollState = 'top';

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();

        if((scrollPos > index) && (scrollState === 'top')){
          $('#contactInfo-email').stop().animate({top: "-30px"}).delay(250);
          $('#contactInfo-phone').stop().animate({top: "-30px"});
          $('.subTitle').animate({top: "32px"});
          scrollState = 'scrolled';
        }
        else if((scrollPos === 0) && (scrollState === 'scrolled')){
          $('#contactInfo-email').stop().animate({top: "0px"}).delay(250);
          $('#contactInfo-phone').stop().animate({top: "23px"});
          $('.subTitle').animate({top: "85px"});
          scrollState = 'top';
        }

    });


  }

  render(){
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

        <div id="subTitleCover">
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
          <div  id="contactInfo-email" className="c-email">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>tdpathmanathan@stcloudstate.edu</span>
          </div>
          <div  id="contactInfo-phone" className="c-phone">
            <i className="fa fa-phone" aria-hidden="false"></i>
            <span>320.237.6857</span>
          </div>
        </div>

      </div>
    );
  }

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

class subHeader extends React.Component{
  render(){
    return(
      <div className="sub-header">
        <h1>Works!</h1>
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(
      <div>
        <div className="header">
          <ProfilePicture />
          <Hexogon dims={"0 0 200 200"}/>
          <NamePlate />
        </div>

      </div>
    );
  }
}


class MainPage extends React.Component{
  render (){
    return(
      <div>
        <Header />
        <subHeader />
      </div>
    );
  }
};

ReactDOM.render(<MainPage />, document.getElementById('main'));
