class Nav extends React.Component {

  static propTypes = {
    handleStart: React.PropTypes.func.isRequired,
    handleStop: React.PropTypes.func.isRequired,
    handleReset: React.PropTypes.func.isRequired,
    handleStore: React.PropTypes.func.isRequired,
    handleClearList: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {

    const styleNav = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '5px',
      marginTop: '10px',
    };

    const styleA = {
      color: '#bababa',
      fontSize: '20px',
      fontWeight: '400',
      padding: '15px',
      textDecoration: 'none',
    };

    return (
      <nav style={styleNav}>
        <a href="#" style={styleA} onClick={this.props.handleStart}>Start</a>
        <a href="#" style={styleA} onClick={this.props.handleStop}>Stop</a>
        <a href="#" style={styleA} onClick={this.props.handleReset}>Reset</a>
        <a href="#" style={styleA} onClick={this.props.handleStore}>Store</a>
        <a href="#" style={styleA} onClick={this.props.handleClearList}>Clear List</a>
      </nav>
    );

  }

}
