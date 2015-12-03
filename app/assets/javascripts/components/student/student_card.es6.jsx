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
        'outreach',
        'parent',
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
      case 'preview':
        return <StudentPreview student={this.props.student} />;
      case 'contact':
        return <StudentContact student={this.props.student} />;
      case 'conference':
        return <StudentConference student={this.props.student} />;
      case 'outreach':
        return <StudentOutreach student={this.props.student} />;
      case 'parent':
        return <StudentParent student={this.props.student} />;
      default:
        return <StudentPreview student={this.props.student} />;
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case 'preview':
        return 'Student Preview';
      case 'contact':
        return 'Student Information';
      case 'parent':
        return 'Parent Information';
      case 'outreach':
        return 'Student Outreach';
      case 'conference':
        return 'Conference Information';
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
