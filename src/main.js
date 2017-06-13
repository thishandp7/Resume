$ = jQuery = require('jquery');
$ui = jQueryUI = require('jquery-ui');

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePicture = require('./HeaderContent/ProfilePicture');
var NamePlate = require('./HeaderContent/NamePlate');
var Hexogon = require('./HeaderContent/Hexogon');
var Summery = require('./BodyContent/Summery');
var Education = require('./BodyContent/Education');
var Experience = require('./BodyContent/Experience');
var Projects = require('./BodyContent/Projects');
var Skills = require('./BodyContent/Skills');

class SubHeader extends React.Component{

  componentDidMount(){
    var index = 170;
    var scrollState = 'top';

    $('html, body').animate({scrollTop: 1});

    $(window).resize(function(){
      $('html, body').animate({scrollTop: 1});
    });

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        if((scrollPos > index) && (scrollState === 'top')){
          $('.sub-header').show();
          $('.p-icon').stop().animate({left: "75px"});
          $('.contactInfo-2').stop().animate({left: "215px"});
          scrollState = 'scrolled';
        }
        else if((scrollPos < index) && (scrollState === 'scrolled')){
          $('.sub-header').hide();
          $('.p-icon').stop().animate({left: "-75px"});
          $('.contactInfo-2').stop().animate({left: "20px"});
          scrollState = 'top';
        }
    });
  }

  render(){
    return(
      <div>
        <div className="sub-header">
          <div className="p-icon">
            <ProfilePicture size={"160px"}/>
          </div>
          <div className="contactInfo-2">
            <div  id="contactInfo-email-2">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>tdpathmanathan@stcloudstate.edu</span>
            </div>
            <div  id="contactInfo-phone-2">
              <i className="fa fa-phone" aria-hidden="false"></i>
              <span>320.237.6857</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

class ContactIcons extends React.Component{

  componentDidMount(){
    $('.fa-linkedin-square').animate({left: "-40px"}, 'slow');
    $('.fa-facebook-square').animate({left: "2px"}, 'slow');
    $('.fa-youtube-square').animate({left: "46px"}, 'slow');


    var index = 140;
    var scrollState = 'top';

    $(window).scroll(function(){
      var scrollPos = $(window).scrollTop();


      if(scrollPos > index && scrollState === 'top'){
        $('.c-icons').addClass('c-icons-fixed');
        $('.c-icons-container').stop().animate({left: "785px"});
        scrollState = 'scrolled';
      }
      else if(scrollPos < index && scrollState === 'scrolled'){
        $('.c-icons').removeClass('c-icons-fixed');
        $('.c-icons-container').stop().animate({left: "890px"});
        scrollState = 'top';
      }

    });
  }

  render(){
    return(
        <div className="c-icons">
          <div className="c-icons-container">
            <a href={'https://www.linkedin.com/in/thishandp7/'} target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="false" style={{top:"5px", left: "350px", position: "absolute"}}></i>
            </a>
            <a href={'https://www.facebook.com/thishandp7'} target="_blank">
              <i className="fa fa-facebook-square" aria-hidden="false" style={{top:"5px", left: "350px", position: "absolute"}}></i>
            </a>
            <a href={'https://www.youtube.com/user/THISHANDP'} target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="false"  style={{top:"5px", left: "350px", position: "absolute"}}></i>
            </a>
        </div>
      </div>
    );
  }
};

class Header extends React.Component{
  render(){
    return(
      <div>
        <ContactIcons />
        <div className="header">
          <ProfilePicture size={"500px"}/>
          <Hexogon width={"420"} dims={"0 0 200 200"}/>
          <NamePlate />
          <SubHeader />
        </div>
      </div>
    );
  }
};

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <span>© Thishan D Pathmanathan    2017</span>
      </div>
    );
  }
}


class MainPage extends React.Component{
  render (){
    return(
      <div>
        <Header />
        <Summery />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(<MainPage />, document.getElementById('main'));
