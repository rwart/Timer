var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {

      var styleNav = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '5px',
        marginTop: '10px'
      };

      var styleA = {
        color: '#bababa',
        fontSize: '20px',
        fontWeight: '400',
        padding: '15px',
        textDecoration: 'none'
      };

      return React.createElement(
        'nav',
        { style: styleNav },
        React.createElement(
          'a',
          { href: '#', style: styleA, onClick: this.props.handleStart },
          'Start'
        ),
        React.createElement(
          'a',
          { href: '#', style: styleA, onClick: this.props.handleStop },
          'Stop'
        ),
        React.createElement(
          'a',
          { href: '#', style: styleA, onClick: this.props.handleReset },
          'Reset'
        ),
        React.createElement(
          'a',
          { href: '#', style: styleA, onClick: this.props.handleStore },
          'Store'
        ),
        React.createElement(
          'a',
          { href: '#', style: styleA, onClick: this.props.handleClearList },
          'Clear List'
        )
      );
    }
  }]);

  return Nav;
}(React.Component);

Nav.propTypes = {
  handleStart: React.PropTypes.func.isRequired,
  handleStop: React.PropTypes.func.isRequired,
  handleReset: React.PropTypes.func.isRequired,
  handleStore: React.PropTypes.func.isRequired,
  handleClearList: React.PropTypes.func.isRequired
};
