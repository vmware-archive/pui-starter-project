var React = require('react');
// Bootstrap Javascript is required for some PUI CSS components, such as accordians, collapse, dropdowns,
// modals, and tooltips
// require('bootstrap');

// Required modules here like so:
// var DefaultButton = require('pui-react-buttons').DefaultButton;

var Card = React.createClass({
  render() {
    return (
      <div className="card" style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
});

var Grid = React.createClass({
  render() {
    let rows = [];
    //for (let i = 0; i < this.props.children.length; i += this.props.itemsPerRow) {
    //  rows.push(this.props.children.slice(i, i + this.props.itemsPerRow));
    //}

    rows.push(this.props.children);

    const wrappedRows = rows.map((row) => {
      return (
        <div className="gridRow">{row}</div>
      );
    });

    return (
      <div className={`grid grid-${this.props.itemsPerRow}`}>
        {wrappedRows}
      </div>
    );
  }
});

Grid.Item = React.createClass({
  render() {
    return (
      <div className="item">
        {this.props.children}
      </div>
    );
  }
});

var MyTestPage = React.createClass({
  render: function() {
    return (
      <Grid itemsPerRow={4}>
        <Grid.Item>
          <Card style={{height: '150px'}}>I am a card that is really really really really big</Card>
        </Grid.Item>
        <Grid.Item>
          <Card>I yam a card</Card>
        </Grid.Item>
        <Grid.Item>
          <Card>I ham a card</Card>
        </Grid.Item>
        <Grid.Item>
          <Card>I am</Card>
        </Grid.Item>
        <Grid.Item>
          <Card>I am not</Card>
        </Grid.Item>
      </Grid>
    )
  }

});

React.render(<MyTestPage />, document.getElementById('root'));
