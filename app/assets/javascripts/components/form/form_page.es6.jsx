class FormPage extends Component {

  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.pages.default,
        {
          alignItems: 'center',
        }
      )
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <FormBody /> 
      </div>
    );
  }
}

