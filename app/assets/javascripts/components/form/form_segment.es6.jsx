class FormSegment extends Component { 

  static get PropTypes() { 
    return {
      title: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
    };
  }

  get styles() {
    return { 
      container: {
        width: '100%',
      },
      title: {
        fontSize: StyleConstants.fonts.sizes.large,
      },
      line: {
        borderTop: 'solid gray 1px',
        flexGrow: '1',
        height: '1px',
        marginLeft: '10px',
      },
      titleContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
      }
    };
  }

  render() { 
    return(
      <div style={this.styles.container}> 
        <div style={this.styles.titleContainer}> 
          <span style={this.styles.title}>{this.props.title}</span>
          <span style={this.styles.line} /> 
        </div>
        <FormTextbox />
      </div> 
    )
  }
}