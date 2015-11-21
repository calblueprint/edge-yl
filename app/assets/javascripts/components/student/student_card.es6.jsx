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
      target: 'preview',
      type: 'edit',
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
        return <StudentPreview {...this.props} />;
      case 'contact':
        return <StudentContact {...this.props} />;
      case 'conference':
        return <StudentConference {...this.props} />;
      case 'parent':
        return <StudentParent {...this.props} />;
      default:
        return <StudentPreview {...this.props} />;
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
      case 'conference':
        return 'Conference Information';
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => StudentActions.storeOverlay(true, 'edit', this.props.target)}
          content={this.renderTitle()}
          icon={'fa fa-pencil-square-o fa-lg'} />
        {this.renderBody()}
      </div>
    );
  }
}
