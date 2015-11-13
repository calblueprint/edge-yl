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
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
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
        <h2>{'Edit'}</h2>
        {this.renderBody()}
      </div>
    );
  }
}
