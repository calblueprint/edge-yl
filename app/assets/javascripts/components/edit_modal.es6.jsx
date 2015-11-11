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
          flexFlow: 'column',
          zIndex: StyleConstants.planes.nine,
        }
      ),
    };
  }

  renderTitle() {
    switch (this.props.type) {
      case 'preview':
        return 'Student Preview';
      case 'contact':
        return 'Student Information';
      case 'parent':
        return 'Parent Information';
      case 'conference':
        return 'Conference Information';
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
        <CardHeader
          action={null}
          content={this.renderTitle()}
          icon={'fa fa-save fa-lg'} />
        {this.renderBody()}
      </div>
    );
  }
}
