class FormTextbox extends Component { 

  static get PropTypes() { 
    return {

    };
  }

  static get defaultProps() {
    return {};
  }

  get styles() {
    return { 
      label: {
        paddingRight: '10px',
      }
    }
  }

  render() {
    return (
      <div>
        <label style={this.styles.label}> {'Label'} </label>
        <input 
          placeholder={'dfksf'}>
        </input> 
      </div>
    )
  }
}