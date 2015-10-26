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
        }
      ),
      title: {
        fontSize: StyleConstants.fonts.largest,
      }
    };
  }

  render() {
    return(
      <div style={this.styles.container} >
        <div style={this.styles.title}>{'Form'}</div>
        <FormSegment
          title={'Hi this is Title'} />
      </div>
    );
  }
}
