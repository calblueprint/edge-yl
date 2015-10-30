class FormParagraph extends Component {

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
        flexFlow: 'column',
        alignItems: 'left',
        marginBottom: '20px',
      },
      label: {
        paddingBottom: '10px',
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
        <textarea
          rows={'8'}
          cols={'50'}
          style={this.styles.input}
          placeholder={this.props.placeHolder}>
        </textarea>
      </div>
    )
  }
}
