$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');

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
        else if((scrollPos < index) && (scrollState === 'scrolled')){
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
        <svg width="900" height="103">
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
          points="85,35 800,35 830,100 825,100 817.5,85 85,85"/>
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
          points="145,40 680,40 700,80 695,80 677,45 145,45"/>
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

module.exports = NamePlate;
