/** @jsx React.DOM */
var Hello = require('./Hello');
var React = require('react');
var ReactDOM = require('react-dom');

console.log(ReactDOM);

ReactDOM.render(
  <Hello />,
  document.getElementById('example')
);
