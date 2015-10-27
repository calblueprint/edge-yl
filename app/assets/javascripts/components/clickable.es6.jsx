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
      // TODO(Warren): Change below PropTypes to an enum.
      type: React.PropTypes.string,
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
      type: 'span',
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
    }
  }

  renderContent(style) {
    var content = this.props.content;
    var icon = this.props.icon;
    if (content || icon) {
      switch (this.props.type) {
        case 'h1':
          return <h1 style={style}>{content}</h1>;
        case 'h2':
          return <h2 style={style}>{content}</h2>;
        case 'h3':
          return <h3 style={style}>{content}</h3>;
        case 'h4':
          return <h4 style={style}>{content}</h4>;
        case 'h5':
          return <h5 style={style}>{content}</h5>;
        case 'h6':
          return <h6 style={style}>{content}</h6>;
        case 'i':
          return <i className={icon} />;
        default:
          return <span style={style}>{content}</span>;
      }
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
    if (this.props.type === 'i') {
      return (
        <a
          href={this.props.route}
          ref={'container'}
          style={style}>
          {this.renderContent(style)}
          {this.renderChildren()}
        </a>
      );
    } else {
      return (
        <a
          href={this.props.route}
          ref={'container'}>
          {this.renderContent(style)}
          {this.renderChildren()}
        </a>
      );
    }
  }
}
