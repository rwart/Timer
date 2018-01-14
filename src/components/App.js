class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      times: {
        minutes: 0,
        seconds: 0,
        centiseconds: 0,
      },
      results: [],
      id: 0,
    };
    this.running = false;
  }

  render() {

    const styles = {
      background: '#607d8a',
      margin: '0 auto',
      maxWidth: '450px',
      padding: '5px',
      textAlign: 'center',
    };

    return (
      <div style={styles}>
        <Nav
          handleStart={this.start}
          handleStop={this.stop}
          handleReset={this.clear}
          handleStore={this.store}
          handleClearList={this.clearList}
        />
        <Display strTime={this.format(this.state.times)}/>
        <Results arr={this.state.results}/>
      </div>
    );

  }

  reset() {
    this.setState({
      times: {
        minutes: 0,
        seconds: 0,
        centiseconds: 0, },
    });
  }

  format(times) {
    return `${this.pad0(times.minutes)} : ${this.pad0(times.seconds)} : ${
      this.pad0(Math.floor(times.centiseconds))}`;
  }

  start = () => {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(()=>this.step(), 10);
    }
  };

  step() {
    if (!this.running) return;
    this.calculate();
  }

  calculate() {
    this.setState(prevState => {
      let times = {};
      Object.assign(times, prevState.times);

      times.centiseconds = times.centiseconds + 1;

      if (times.centiseconds >= 100) {
        times.seconds += 1;
        times.centiseconds = 0;
      }

      if (times.seconds >= 60) {
        times.minutes += 1;
        times.seconds = 0;
      }

      if (times.minutes >= 100) {
        times.centiseconds = 0;
        times.seconds = 0;
        times.minutes = 0;
      }

      return { times: times };
    });
  }

  stop = () => {
    if (this.running) {
      this.running = false;
      clearInterval(this.watch);
    }
  };

  clear = () => {
    this.stop();
    this.reset();
  };

  store = () => {
    const times = this.format(this.state.times);
    this.setState((prevState) => {
      const id = prevState.id + 1;
      return ({
        id: id,
        results: [...prevState.results, { id: id, value: times, }],
      });
    });
  };

  clearList = () => {
    this.setState({
      results: [],
    });
  };

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = '0' + result;
    }

    return result;
  }
}
