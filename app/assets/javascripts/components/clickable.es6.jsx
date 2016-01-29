class Clickable extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func,
      children: React.PropTypes.node,
      content: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
      ]),
      icon: React.PropTypes.string,
      route: React.PropTypes.string,
      source: React.PropTypes.string,
      styles: React.PropTypes.shape({
        child: React.PropTypes.object,
        default: React.PropTypes.object,
        hover: React.PropTypes.object,
      }),
      type: React.PropTypes.oneOf([
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'i',
        'img',
        'p',
      ]).isRequired,
      underline: React.PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      action: null,
      children: null,
      content: '',
      icon: '',
      route: '',
      source: '',
      styles: {
        child: {},
        default: {},
        hover: {},
      },
      underline: true,
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      hover: false,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      hover: Object.assign(
        {},
        this.props.styles.hover,
        this.props.underline && this.props.type !== 'i' &&
        this.props.type !== 'img' && this.props.type !== 'div' &&
        !(this.props.route === '' && this.props.action === null) &&
        { textDecoration: 'underline' }
      ),
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.onclick = (event) => this.handleClick(event);
    node.onmousedown = (event) => this.handleMouseDown(event);
    node.onmouseenter = (event) => this.handleMouseEnter(event);
    node.onmouseleave = (event) => this.handleMouseLeave(event);
    node.onmouseup = (event) => this.handleMouseUp(event);
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    event.stopPropagation();
    var props = this.props;
    if (props.route === '' && props.action !== null) {
      event.preventDefault();
      props.action(event);
    }
  }

  handleMouseDown(event) {
    var props = this.props;
    if (props.route !== '' || props.action !== null) {
      event.preventDefault();
    }
    this.setState({ hover: true });
  }

  handleMouseEnter(event) {
    this.setState({ hover: true });
  }


  handleMouseLeave(event) {
    if (this.state.hover) {
      this.setState({ hover: false });
    }
  }

  handleMouseUp(event) {
    this.setState({ hover: true });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChildren() {
    if (this.props.children) {
      return this.props.children;
    }
  }

  renderContent(style) {
    var content = this.props.content;
    var icon = this.props.icon;
    var source = this.props.source;
    var style = Object.assign(
      {},
      this.props.styles.child,
      {
        color: 'inherit',
        backgroundColor: 'inherit',
      }
    );
    if (content || icon || source) {
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
          return <i className={icon} style={style} />;
        case 'img':
          return <img style={style} src={source} />;
        case 'p':
          return <p style={style}>{content}</p>;
      }
    }
  }

  render() {
    var props = this.props;
    var style = Object.assign(
      {},
      props.styles.default,
      this.state.hover && this.styles.hover,
      props.route === '' && props.action === null && { cursor: 'default' }
    );
    if (props.type === 'i' || props.type === 'img') {
      return (
        <a
          href={this.props.route}
          ref={'container'}
          style={style}>
          {this.renderContent()}
          {this.renderChildren()}
        </a>
      );
    } else if (props.type === 'div') {
      return (
        <a
          href={props.route}
          ref={'container'}
          style={style}>
          {this.renderChildren()}
        </a>
      );
    } else {
      return (
        <a
          href={props.route}
          ref={'container'}
          style={style}>
          {this.renderContent()}
        </a>
      );
    }
  }
}
