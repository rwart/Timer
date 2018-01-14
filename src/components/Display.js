class Display extends React.Component {
  static defaultProps = {
    strTime: '',
  };

  static propTypes = {
    strTime: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {

    const styles = {
      color: '#bababa',
      fontSize: '70px',
      fontWeight: '600',
      textAlign: 'center',
    };

    return (
      <div style={styles}>{this.props.strTime}</div>
    );
  }
}
