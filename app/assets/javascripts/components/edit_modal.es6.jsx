class EditModal extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        'contact',
        'conference',
        'parent',
        'preview',
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
      type: 'preview',
    };
  }

  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: StyleConstants.planes.nine,
          width: '32.5%',
        }
      ),
    };
  }

  renderBody() {
    switch (this.props.type) {
      default:
        return <EditPreview {...this.props} />;
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderBody()}
      </div>
    );
  }
}
