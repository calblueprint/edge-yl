class GeneralButton extends React.Component {

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
    };
  }

  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.route !== '') {
      // Route
    } else if (this.props.action !== null) {
      this.props.action();
    }
  }

  render () {
    return (
      <a
        href={this.props.route}
        onClick={this.handleClick.bind(this)}
        style={this.styles.container}>
        {this.props.content}
      </a>
    );
  }
}

