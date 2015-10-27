class FormBody extends Component {

  static get PropTypes() {
    return {};
  }

  static get defaultProps() {
    return {};
  }

  // TODO(Sonia): Add more styling to container
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
        fontSize: StyleConstants.fonts.sizes.largest,
      },
    };
  }

  render() {
    return(
      <div style={this.styles.container}>
        <div style={this.styles.title}>{'Form'}</div>
      </div>
    );
  }
}
