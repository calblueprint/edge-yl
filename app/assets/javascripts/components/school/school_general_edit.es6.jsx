class SchoolGeneralEdit extends Component {

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
      SchoolActions.storeAttribute(field, event.target.value);
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
          action={this.generateHandler('school_name')}
          errors={template.errors.name}
          placeholder={'School'}
          value={template.name} />
        <CardInput
          action={this.generateHandler('address_one')}
          errors={template.errors.address_one}
          placeholder={'Address one'}
          value={template.address_one} />
      </div>
    );
  }
}
