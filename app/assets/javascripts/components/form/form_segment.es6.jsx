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
      title: {
        borderBottom: 'solid gray 3px',
      }
    };
  }

  render() { 
    return(
      <div style={this.styles.container}> 
        <div style={this.styles.title}> {this.props.title} </div> 
        <FormTextbox />
      </div> 
    )
  }
}