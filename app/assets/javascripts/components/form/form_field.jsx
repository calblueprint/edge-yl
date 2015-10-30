class FormField extends Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      placeHolder: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {};
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
      },
      label: {
        paddingRight: '24px',
        fontSize: StyleConstants.fonts.sizes.smaller,
      },
      input: {
        flex: '1',
        padding: '8px',
        fontSize: StyleConstants.fonts.sizes.smallest,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <label style={this.styles.label}>{this.props.title}</label>
        <input
          style={this.styles.input}
          placeholder={this.props.placeHolder}>
        </input>
      </div>
    )
  }
}
