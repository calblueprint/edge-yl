class ConferenceCreate extends Component {

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
      ConferencesActions.storeAttribute(field, event.target.value);
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
          action={this.generateHandler('name')}
          errors={template.errors.name}
          focus={true}
          label={'Name'}
          value={template.name} />
        <CardInput
          action={this.generateHandler('location')}
          errors={template.errors.location}
          label={'Location'}
          margin={true}
          value={template.location} />
        <CardInput
          action={this.generateHandler('start_date')}
          errors={template.errors.start_date}
          label={'Start date'}
          margin={true}
          type={'date'}
          value={template.start_date} />
        <CardInput
          action={this.generateHandler('end_date')}
          errors={template.errors.end_date}
          label={'End date'}
          margin={true}
          type={'date'}
          value={template.end_date} />
      </div>
    );
  }
}
