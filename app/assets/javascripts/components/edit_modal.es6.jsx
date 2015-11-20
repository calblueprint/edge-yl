class EditModal extends Component {


  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._node = null;
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        marginBottom: '6px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.type) {
      case "create_comment":
        return <CreateComment {...this.props} />;
      default:
        return <EditPreview {...this.props} />;
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h2 style={this.styles.title}>{'Edit'}</h2>
        {this.renderBody()}
      </div>
    );
  }
}
