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
          alignItems: 'center',
          padding: '36px',
          margin: '20px',
        }
      ),
      title: {
        margin: '30px 0px',
        fontSize: StyleConstants.fonts.sizes.largest,
      },
    };

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
