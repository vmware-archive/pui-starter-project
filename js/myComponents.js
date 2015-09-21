var React = require('react');
// Bootstrap Javascript is required for some PUI CSS components, such as accordians, collapse, dropdowns,
// modals, and tooltips
// require('bootstrap');

// Required modules here like so:
// var DefaultButton = require('pui-react-buttons').DefaultButton;


var MyTestPage = React.createClass({
  render: function() {
    return (
      // Put your react components here, like so:
      // <DefaultButton>
      //   I'm a button to click!
      // </DefaultButton>
      <p> Your react components will render here! </p>
    )
  }
});

React.render(<MyTestPage />, document.getElementById('root'));
