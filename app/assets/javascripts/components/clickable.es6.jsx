class Clickable extends Component {

  static get propTypes() {
    return {
      content: React.PropTypes.string,
      children: React.PropTypes.node,
      func: React.PropTypes.func,
      icon: React.PropTypes.string,
      route: React.PropTypes.string,
      styles: React.PropTypes.shape({
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
      content: '',
      children: null,
      func: null,
      icon: '',
      route: '',
      styles: {
        default: {},
        hover: {},
      },
      type: 'span',
    };
  }

  static get defaultState() {
    // Mouse state enum: 'default' or 'hover'.
    return {
      mouse: 'default',
    }
  }

  get styles() {
    return {
      static: {
        cursor: 'default',
      },
    };
  }

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.addEventListener('click', (event) => this.handleClick(event));
    node.addEventListener('mouseenter', (event) => this.handleMouseEnter(event));
    node.addEventListener('mouseleave', (event) => this.handleMouseLeave(event));
    node.addEventListener('mouseup', (event) => this.handleMouseUp(event));
  }

  handleClick(event) {
    var props = this.props;
    if (props.route === '' && props.func !== null) {
      event.preventDefault();
      event.stopPropagation();
      props.func(event);
    }
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
          {this.renderContent(style)}
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
