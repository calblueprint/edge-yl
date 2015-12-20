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
        <h4>{'Guardian One'}</h4>
        <CardInput
          action={this.generateHandler('location')}
          placeholder={'Location'}
          value={template.location} />
        <CardInput
          action={this.generateHandler('start_date')}
          placeholder={'Start date'}
          value={template.start_date} />
        <CardInput
          action={this.generateHandler('end_date')}
          placeholder={'End date'}
          value={template.end_date} />
      </div>
    );
  }
}
