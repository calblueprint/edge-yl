class GeneralButton extends Component {

  static get propTypes() {
    return {
      action: React.PropTypes.func,
      route: React.PropTypes.string,
      content: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      action: null,
      route: '',
      content: '',
    };
  }

  static get defaultState() {
    return {
      mouse: 'up',
    }
  }

  get styles() {
    return {
      container: {
        display: 'inline-block',
        verticalAlgin: 'middle',
        position: 'relative',
        padding: '6px 12px',
        color: 'white',
        backgroundColor: '#68B1DE',
        borderBottom: '2px solid #28719E',
        borderRadius: 2,
        fontSize: '14px',
      },
      down: {
        borderBottom: 0,
      },
    };
  }

  componentDidMount() {
    var node = React.findDOMNode(this.refs.container);
    node.addEventListener('mousedown', this.handleMouseDown.bind(this));
    node.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    node.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  handleClick(event) {
    if (this.props.route === '') {
      event.preventDefault();
      event.stopPropagation();
      if (this.prop.action !== null) {
        this.props.action();
      }
    }
  }

  handleMouseDown(event) {
    this.setState({ mouse: 'down' });
  }

  handleMouseUp(event) {
    this.setState({ mouse: 'up' });
  }

  handleMouseLeave(event) {
    if (this.state.mouse === 'down') {
      this.setState({ mouse: 'up' });
    }
  }

  render() {
    var style = Object.assign(
      this.styles.container,
      this.state.mouse === 'down' && this.styles.down
    );
    return (
      <a
        href={this.props.route}
        onClick={this.handleClick.bind(this)}
        ref={'container'}
        style={style}>
        {this.props.content}
      </a>
    );
  }
}

