class FormBody extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      form: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      form: {},
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
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
  renderSection(section, index) {
    return (
      <FormSection
        key={index}
        section={section} />
    );
  }

  renderSections() {
    return this.state.sections.map((section, index) => this.renderSection(section, index));
  }

  render() {
    return(
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h1 style={this.styles.title}>{'Form'}</h1>
        </div>
        {this.renderSections()}
        <FormButton
          action={(event) => FormActions.createObject(this.state.sections)}
          content={'Submit'} />
      </div>
    );
  }
}
