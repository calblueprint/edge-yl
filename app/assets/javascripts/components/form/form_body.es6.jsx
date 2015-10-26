class FormBody extends Component { 

  static get PropTypes() {
    return {};
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
        {},
      ),
    };
  }

  render() {
    return(
      <div>
      </div>
    );
  }
}
