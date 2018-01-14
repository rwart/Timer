var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.start = function () {
      if (!_this.running) {
        _this.running = true;
        _this.watch = setInterval(function () {
          return _this.step();
        }, 10);
      }
    };

    _this.stop = function () {
      if (_this.running) {
        _this.running = false;
        clearInterval(_this.watch);
      }
    };

    _this.clear = function () {
      _this.stop();
      _this.reset();
    };

    _this.store = function () {
      var times = _this.format(_this.state.times);
      _this.setState(function (prevState) {
        var id = prevState.id + 1;
        return {
          id: id,
          results: [].concat(_toConsumableArray(prevState.results), [{ id: id, value: times }])
        };
      });
    };

    _this.clearList = function () {
      _this.setState({
        results: []
      });
    };

    _this.state = {
      times: {
        minutes: 0,
        seconds: 0,
        centiseconds: 0
      },
      results: [],
      id: 0
    };
    _this.running = false;
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      var styles = {
        background: '#607d8a',
        margin: '0 auto',
        maxWidth: '450px',
        padding: '5px',
        textAlign: 'center'
      };

      return React.createElement(
        'div',
        { style: styles },
        React.createElement(Nav, {
          handleStart: this.start,
          handleStop: this.stop,
          handleReset: this.clear,
          handleStore: this.store,
          handleClearList: this.clearList
        }),
        React.createElement(Display, { strTime: this.format(this.state.times) }),
        React.createElement(Results, { arr: this.state.results })
      );
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState({
        times: {
          minutes: 0,
          seconds: 0,
          centiseconds: 0 }
      });
    }
  }, {
    key: 'format',
    value: function format(times) {
      return this.pad0(times.minutes) + ' : ' + this.pad0(times.seconds) + ' : ' + this.pad0(Math.floor(times.centiseconds));
    }
  }, {
    key: 'step',
    value: function step() {
      if (!this.running) return;
      this.calculate();
    }
  }, {
    key: 'calculate',
    value: function calculate() {
      this.setState(function (prevState) {
        var times = {};
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
  }, {
    key: 'pad0',
    value: function pad0(value) {
      var result = value.toString();
      if (result.length < 2) {
        result = '0' + result;
      }

      return result;
    }
  }]);

  return App;
}(React.Component);
