class StudentContactEdit extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '18px',
        marginBottom: '18px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(field) {
    var state = {};
    return(event) => {
      StudentActions.storeTemplate(field, event.target.value);
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    return (
      <div style={this.styles.container}>
        <CardInput
          action={this.generateHandler('email')}
          placeholder={'Email'}
          value={template.email} />
        <CardInput
          action={this.generateHandler('cell_phone')}
          placeholder={'Cell phone'}
          value={template.cell_phone} />
        <CardInput
          action={this.generateHandler('home_phone')}
          placeholder={'Home phone'}
          value={template.home_phone} />
        <CardInput
          action={this.generateHandler('home_address')}
          placeholder={'Home address'}
          value={template.home_address} />
      </div>
    );
  }
}
