class GeneralButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

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

  get styles() {
    return {
      container: {
        display: 'inline-block',
        verticalAlgin: 'middle',
        position: 'relative',
        padding: '6px 12px',
        color: 'white',
        backgroundColor: '#68B1DE',
        borderBottom: '2px solid',
        borderColor: '#28719E',
        borderRadius: 2,
        fontSize: '14px',
      },
      hover: {
        borderBottom: 0,
      },
    };
  }

  componentDidMount() {
    var node = React.findDOMNode(this.refs.container);
    node.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
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

  handleMouseEnter(event) {
    this.setState({ hover: true });
  }

  render() {
    var style = Object.assign(
      this.styles.container,
      this.state.hover && this.styles.hover
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

