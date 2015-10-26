class FormBody extends Component { 

  static get propTypes() {
    return {
    };
  }

  static get defaultProps() {
    return {};
  }

//TODO(Sonia): Add more styling to container
  get styles() {
    return {
      container: Object.assign( 
        {},
        StyleConstants.cards.default,
        {
          margin: '20px',
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          padding: '15px',
        }
      ),
      title: {
        fontSize: StyleConstants.fonts.sizes.largest,
        marginBottom: '40px',
      }
    };
  }

  render() {
    return(
      <div style={this.styles.container} >
        <span style={this.styles.title}>{'Form'}</span>
        <FormSegment
          title={'Basic Information'} />
        <FormSegment 
          title={'Health Information'} />
      </div>
    );
  }
}
