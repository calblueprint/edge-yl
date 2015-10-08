class GeneralButton extends Component {

  static get propTypes() {
    return {
      func: React.PropTypes.func,
      content: React.PropTypes.string.isRequired,
      route: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      func: null,
      content: '',
      route: '',
    };
  }

  get styles() {
    return {
      action: {
        borderBottom: 0,
      },
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
    };
  }

  render() {
    return (
      <Clickable
        styles={this.styles}
        {...this.props}
      />
    );
  }
}

