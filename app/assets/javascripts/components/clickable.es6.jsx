class Clickable extends Component {

  static get propTypes() {
    return {
      content: React.PropTypes.string,
      children: React.PropTypes.node,
      func: React.PropTypes.func,
      icon: React.PropTypes.string,
      route: React.PropTypes.string,
      styles: React.PropTypes.shape({
        click: React.PropTypes.object,
        default: React.PropTypes.object,
        hover: React.PropTypes.object,
      }),
    };
  }

  static get defaultProps() {
    return {
      content: '',
      children: null,
      func: null,
      icon: '',
      route: '',
      styles: {
        click: {},
        default: {},
        hover: {},
      },
    };
  }

  static get defaultState() {
    // Mouse state 'enum': 'click', 'default', 'hover'.
    return {
      mouse: 'default',
    }
  }

  componentDidMount() {
    var node = React.findDOMNode(this.refs.container);
    node.addEventListener('click', this.handleClick.bind(this));
    node.addEventListener('mousedown', this.handleMouseDown.bind(this));
    node.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    node.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    node.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  handleClick(event) {
    if (this.props.route === '') {
      event.preventDefault();
      event.stopPropagation();
      if (this.props.func !== null) {
        this.props.func();
      }
    }
  }

  handleMouseDown(event) {
    this.setState({ mouse: 'click' });
  }

  handleMouseEnter(event) {
    this.setState({ mouse: 'hover' });
  }

  handleMouseUp(event) {
    this.setState({ mouse: 'hover' });
  }

  handleMouseLeave(event) {
    if (this.state.mouse !== 'default') {
      this.setState({ mouse: 'default' });
    }
  }

  renderChildren() {
    if (this.props.children) {
      return this.props.children;
    } else {
      return this.props.content;
    }
  }

  render() {
    var styles = this.props.styles;
    var style = Object.assign(
      {},
      styles.default,
      this.state.mouse === 'click' && styles.click,
      this.state.mouse === 'hover' && styles.hover
    );
    if (this.props.icon !== '') {
      return (
        <a
          className={this.props.icon}
          href={this.props.route}
          ref={'container'}
          style={style}>
          {this.renderChildren()}
        </a>
      );
    } else {
      return (
        <a
          href={this.props.route}
          ref={'container'}
          style={style}>
          {this.renderChildren()}
        </a>
      );
    }
  }
}
