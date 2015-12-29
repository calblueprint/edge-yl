class StudentGeneralEdit extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
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
        <CardInput
          action={this.generateHandler('first_name')}
          errors={template.errors.first_name}
          margin={false}
          value={template.first_name} />
        <CardInput
          action={this.generateHandler('preferred_name')}
          errors={template.errors.preferred_name}
          value={template.preferred_name} />
        <CardInput
          action={this.generateHandler('last_name')}
          errors={template.errors.last_name}
          value={template.last_name} />
        <CardInput
          action={this.generateHandler('birthday')}
          errors={template.errors.birthday}
          value={template.birthday} />
      </div>
    );
  }
}
