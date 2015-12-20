class StudentContactEdit extends Component {

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
          action={this.generateHandler('email')}
          errors={template.errors.email}
          margin={false}
          placeholder={'Email'}
          value={template.email} />
        <CardInput
          action={this.generateHandler('cell_phone')}
          errors={template.errors.cell_phone}
          placeholder={'Cell phone'}
          value={template.cell_phone} />
        <CardInput
          action={this.generateHandler('home_phone')}
          errors={template.errors.home_phone}
          placeholder={'Home phone'}
          value={template.home_phone} />
        <CardInput
          action={this.generateHandler('home_address')}
          errors={template.errors.home_address}
          placeholder={'Home address'}
          value={template.home_address} />
      </div>
    );
  }
}
