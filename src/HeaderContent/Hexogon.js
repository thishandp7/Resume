"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

const Hexogon = (props) => {
    return(
      <svg className="hex" width={props.width} height={props.width} viewBox={props.dims} xmlns="http://www.w3.org/2000/svg">
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

module.exports = Hexogon;
