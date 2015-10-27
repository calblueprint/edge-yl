class FormBody extends Component {

  static get propTypes() {
    return {};
  }

  static get defaultProps() {
    return {};
  }

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

  render() {
    return(
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h1 style={this.styles.title}>{'Form'}</h1>
        </div>
        <FormSection
          title={'Basic Information'} />
        <FormSection
          title={'Health Information'} />
      </div>
    );
  }
}
