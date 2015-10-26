class FormTextbox extends Component { 

  static get PropTypes() { 
    return {
      title: React.PropTypes.string.isRequired,
      placeHolder: React.PropTypes.string, 
    };
  }

  static get defaultProps() {
    return {

    };
  }

  get styles() {
    return { 
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '400px',
        marginBottom: '20px',
      },
      label: {
        paddingRight: '10px',
        fontSize: StyleConstants.fonts.sizes.smaller,
      },
      input: {
        height: '30px',
        width: '250px', 
        padding: '4px',
        alignSelf: 'flex-end',
        fontSize: StyleConstants.fonts.sizes.smallest, 
      },
    }
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