class StudentGuardianEdit extends Component {

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
  // Helpers
  // --------------------------------------------------
  generateHandler(field) {
    var state = {};
    return(event) => {
      StudentActions.storeAttribute(field, event.target.value);
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    return (
      <div style={StyleConstants.cards.body}>
        <h4>{'Guardian One'}</h4>
        <CardInput
          action={this.generateHandler('guardian_one_name')}
          placeholder={'Guardian one name'}
          value={template.guardian_one_name} />
        <CardInput
          action={this.generateHandler('guardian_one_phone')}
          placeholder={'Guardian one phone'}
          value={template.guardian_one_phone} />
        <CardInput
          action={this.generateHandler('guardian_one_email')}
          placeholder={'Guardian one email'}
          value={template.guardian_one_email} />
        <br />
        <h4>{'Guardian Two'}</h4>
        <CardInput
          action={this.generateHandler('guardian_two_name')}
          placeholder={'Guardian two name'}
          value={template.guardian_two_name} />
        <CardInput
          action={this.generateHandler('guardian_two_phone')}
          placeholder={'Guardian two phone'}
          value={template.guardian_two_phone} />
        <CardInput
          action={this.generateHandler('guardian_two_email')}
          placeholder={'Guardian two email'}
          value={template.guardian_two_email} />
      </div>
    );
  }
}
