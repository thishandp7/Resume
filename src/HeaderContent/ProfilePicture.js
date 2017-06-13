"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

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

    var co1 = this.props.coords1;
    var co2 = this.props.coords2;
    var co3 = this.props.coords3;
    var co4 = this.props.coords4;

    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 20, 12, 165, 165);
    }
    img.src = './img/DP.jpg';
  }

  render(props){
    return(
      <canvas ref="myCanvas" width="500" height="500" className="profilePic" style={{width: this.props.size, top: this.props.top, left: this.props.left}}></canvas>
    );
  }
};

module.exports = ProfilePicture;
