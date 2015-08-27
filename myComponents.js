var React = require('react');
var DefaultH1 = require('pui-react-typography').DefaultH1;
var PrimaryButton = require('pui-react-buttons').PrimaryButton;

var MyTestPage = React.createClass({
 getInitialState: function() {
   return {showMessage: false};
 },

 showMessage: function() {
   this.setState({showMessage: true});
 },

 render: function() {
   return (
     <div className="container">
   <PrimaryButton onClick={this.showMessage}>Show Message</PrimaryButton>
   { this.state.showMessage ? <DefaultH1>Hello world!</DefaultH1> : null }
 </div>
   );
 }
});

React.render(<MyTestPage />, document.getElementById('root'));
