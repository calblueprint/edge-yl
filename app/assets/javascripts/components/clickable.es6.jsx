class Clickable extends Component {

  static get propTypes() {
    return {
      content: React.PropTypes.string,
      children: React.PropTypes.node,
      func: React.PropTypes.func,
      route: React.PropTypes.string,
      styles: React.PropTypes.shape({
        action: React.PropTypes.object,
        default: React.PropTypes.object,
      }),
    };
  }

  static get defaultProps() {
    return {
      content: '',
      children: null,
      func: null,
      route: '',
      styles: {},
    };
  }

  static get defaultState() {
    return {
      action: false,
    }
  }

  componentDidMount() {
    var node = React.findDOMNode(this.refs.container);
    node.addEventListener('click', this.handleClick.bind(this));
    node.addEventListener('mousedown', this.handleMouseDown.bind(this));
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
    this.setState({ action: true });
  }

  handleMouseUp(event) {
    this.setState({ action: false });
  }

  handleMouseLeave(event) {
    if (this.state.action) {
      this.setState({ action: false });
    }
  }

  renderChildren() {
    if (this.props.children) {
      return this.props.children;
    } else {
      return <span>{this.props.content}</span>;
    }
  }
  render() {
    var style = Object.assign(
      {},
      this.props.styles.default,
      this.state.action && this.props.styles.action
    );
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
