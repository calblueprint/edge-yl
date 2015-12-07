class FormBody extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      form: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.defaults.card,
        {
          width: '712px',
          padding: '36px',
          margin: '20px',
        }
      ),
      header: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '24px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderSection(section) {
    return (
      <FormSection
        key={section.id}
        section={section} />
    );
  }

  renderSections() {
    var sections = this.props.form.sections;
    if (sections) {
      return sections.map((section) => this.renderSection(section));
    }
  }

  render() {
    return(
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h1 style={this.styles.title}>{'Form'}</h1>
        </div>
        {this.renderSections()}
        <FormButton
          action={() => FormActions.createObject(this.props.form)}
          content={'Submit'} />
      </div>
    );
  }
}
