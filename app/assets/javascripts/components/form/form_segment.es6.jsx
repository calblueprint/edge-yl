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
      },
    };
  }

  render() { 
    return(
      <div style={this.styles.container}> 
        <div> {this.props.title} </div> 
        <FormTextbox />
      </div> 
    )
  }
}