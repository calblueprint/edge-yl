class StudentCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      target: React.PropTypes.oneOf([
        'comment',
        'contact',
        'conference',
        'guardian',
        'preview',
      ]).isRequired,
      type: React.PropTypes.oneOf([
        'create',
        'edit',
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
      target: TypeConstants.overlay.target.preview,
      type: TypeConstants.overlay.type.edit,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          width: '32.5%',
          height: '312px',
          marginTop: '1%',
        }
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.target) {
      case TypeConstants.overlay.preview:
        return <StudentPreview student={this.props.student} />;
      case TypeConstants.overlay.contact:
        return <StudentContact student={this.props.student} />;
      case TypeConstants.overlay.conference:
        return <StudentConference student={this.props.student} />;
      case TypeConstants.overlay.guardian:
        return <StudentGuardian student={this.props.student} />;
      default:
        return <StudentPreview student={this.props.student} />;
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case TypeConstants.overlay.preview:
        return 'Student Preview';
      case TypeConstants.overlay.contact:
        return 'Student Information';
      case TypeConstants.overlay.conference:
        return 'Conference Information';
      case TypeConstants.overlay.guardian:
        return 'Guardian Information';
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => StudentActions.storeOverlay(true, TypeConstants.overlay.type.edit, this.props.target)}
          content={this.renderTitle()}
          icon={TypeConstants.icons.edit} />
        {this.renderBody()}
      </div>
    );
  }
}
