class Results extends React.Component {
  static defaultProps = {
    arr: [],
  };

  static propTypes = {
    arr: React.PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {

    const styles = {
      color: '#bababa',
      fontSize: '20px',
      fontWeight: '400',
      listStyleType: 'none',
      margin: '15px 0',
      padding: '1px',
      textAlign: 'center',
    };

    const results = this.props.arr.map((item) => <Result key={item.id} result={item.value}/>);

    return <ul style={styles}>{results}</ul>;
  }
}
