class Clickable extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func,
      content: React.PropTypes.string,
      children: React.PropTypes.node,
      icon: React.PropTypes.string,
      route: React.PropTypes.string,
      styles: React.PropTypes.shape({
        child: React.PropTypes.object,
        default: React.PropTypes.object,
        hover: React.PropTypes.object,
      }),
      type: React.PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'i',
        'img',
        'span'
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      action: null,
      content: '',
      children: null,
      icon: '',
      route: '',
      styles: {
        child: {},
        default: {},
        hover: {},
      },
      type: 'span',
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    // Mouse state enum: 'default' or 'hover'.
    return {
      mouse: 'default',
    }
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      static: {
        cursor: 'default',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.addEventListener('click', (event) => this.handleClick(event));
    node.addEventListener('mouseenter', (event) => this.handleMouseEnter(event));
    node.addEventListener('mouseleave', (event) => this.handleMouseLeave(event));
    node.addEventListener('mouseup', (event) => this.handleMouseUp(event));
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    var props = this.props;
    if (props.route === '' && props.func !== null) {
      event.preventDefault();
      event.stopPropagation();
      props.action(event);
    }
  }

  handleMouseEnter(event) {
    this.setState({ mouse: 'hover' });
  }


  handleMouseLeave(event) {
    if (this.state.mouse !== 'default') {
      this.setState({ mouse: 'default' });
    }
  }

  handleMouseUp(event) {
    this.setState({ mouse: 'hover' });
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
          return <i className={icon} style={style} />;
        case 'span':
          return <span style={style}>{content}</span>;
      }
    }
  }

  render() {
    var props = this.props;
    var styles = props.styles;
    var style = Object.assign(
      {},
      styles.default,
      this.state.mouse === 'hover' && styles.hover,
      props.route === '' && props.func === null && this.styles.static
    );
    if (props.type === 'i' || props.type === 'img') {
      return (
        <a
          href={this.props.route}
          ref={'container'}
          style={style}>
          {this.renderContent(styles.child)}
          {this.renderChildren()}
        </a>
      );
    } else {
      return (
        <a
          href={props.route}
          ref={'container'}>
          {this.renderContent(style)}
          {this.renderChildren()}
        </a>
      );
    }
  }
}
