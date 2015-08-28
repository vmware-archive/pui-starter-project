var React = require('react');
var SimpleTabs = require('pui-react-tabs').SimpleTabs;
var Tab = require('pui-react-tabs').Tab;

var MyTestPage = React.createClass({
 render: function() {
   return (
    <SimpleTabs defaultActiveKey={1}>
      <Tab eventKey={1} title="Tab 1">Wow!</Tab>
      <Tab eventKey={2} title="Tab 2">
        <h2>Neat!</h2>
        <span>So much content.</span>
      </Tab>
    </SimpleTabs>
   );
 }
});

React.render(<MyTestPage />, document.getElementById('root'));
