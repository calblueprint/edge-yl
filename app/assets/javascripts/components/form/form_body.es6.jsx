class FormBody extends Component {

  static get propTypes() {
    return {};
  }

  static get defaultProps() {
    return {};
  }

<<<<<<< HEAD
=======
  // TODO(Sonia): Add more styling to container
>>>>>>> 99a7890abe64617f8c199ef8cd04377cebffb529
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex', 
          flexFlow: 'column',
          alignItems: 'center',
          width: '712px',
          padding: '36px',
          margin: '20px',
        }
      ),
      title: {
        margin: '30px 0px',
        fontSize: StyleConstants.fonts.sizes.largest,
      },
    };
  }

  render() {
    return(
      <div style={this.styles.container} >
        <span style={this.styles.title}>{'Form'}</span>
        <FormSection
          title={'Basic Information'} />
        <FormSection
          title={'Health Information'} />
      </div>
    );
  }
}
