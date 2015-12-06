class StudentCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
      target: React.PropTypes.oneOf([
        'comment',
        'contact',
        'conference',
        'outreach',
        'guardian',
        'preview',
      ]).isRequired,
      type: React.PropTypes.oneOf([
        'create',
        'edit',
      ]).isRequired,
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
          height: '312px',
          marginTop: '1%',
        },
        this.props.media === 'large' && { width: '32.5%' },
        this.props.media === 'medium' && { width: '49%' },
        this.props.media === 'small' && { width: '100%' }
      ),
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    StudentActions.storeOverlay(
      true,
      TypeConstants.overlay.type.edit,
      this.props.target
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.target) {
      case TypeConstants.overlay.target.conference:
        return <StudentConference student={this.props.student} />;
      case TypeConstants.overlay.target.contact:
        return <StudentContact student={this.props.student} />;
      case TypeConstants.overlay.target.guardian:
        return <StudentGuardian student={this.props.student} />;
      case TypeConstants.overlay.target.outreach:
        return <StudentOutreach student={this.props.student} />;
      case TypeConstants.overlay.target.preview:
        return <StudentPreview student={this.props.student} />;
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case TypeConstants.overlay.target.conference:
        return 'Conference Information';
      case TypeConstants.overlay.target.contact:
        return 'Student Information';
      case TypeConstants.overlay.target.guardian:
        return 'Guardian Information';
      case TypeConstants.overlay.target.outreach:
        return 'Student Outreach';
      case TypeConstants.overlay.target.preview:
        return 'Student Preview';
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={() => this.showOverlay()}
          content={this.renderTitle()}
          icon={TypeConstants.icons.edit} />
        {this.renderBody()}
      </div>
    );
  }
}
