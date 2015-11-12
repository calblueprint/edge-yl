class EditModal extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        'contact',
        'conference',
        'parent',
        'preview',
        'create_comment',
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
          zIndex: StyleConstants.planes.nine,
        }
      ),
    };
  }

  renderBody() {
    switch (this.props.type) {
      case 'create_comment':
        return <CreateComment {...this.props} />
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
