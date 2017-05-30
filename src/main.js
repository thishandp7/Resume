$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');
//var MainPage = require('./Components/MainPage');

class Header extends React.Component{

}

class MainPage extends React.Component{


  render (){
    return(
      <div>
        <h1>Thishan D Pathmanathan</h1>
      </div>
    );
  }
}

ReactDOM.render(<MainPage />, document.getElementById('main'));
