class Result extends React.Component {
  static defaultProps = {
    result: '',
  };

  static propTypes = {
    result: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {

    const styles = {
      margin: '0',
      padding: '0',
    };

    return (
      <li style={styles}>{this.props.result}</li>
    );
  }
}
