class UserCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      user: React.PropTypes.object.isRequired,
      target: React.PropTypes.oneOf([
        'comment',
        'outreach',
        'responsibilities',
      ]).isRequired,
      type: React.PropTypes.oneOf([
        'create',
        'edit',
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      user: {},
      target: TypeConstants.overlay.target.outreach,
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
  // Helpers
  // --------------------------------------------------
  showOverlay(event) {
    UserActions.storeOverlay(
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
      case 'outreach':
        return <StudentOutreach user={this.props.user} />;
      case 'responsibilities':
        return <ResponsibilitiesCard user={this.props.user} />;
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case 'outreach':
        return 'Student Outreach';
      case 'responsibilities':
        return 'Responsibilities';
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => this.showOverlay(event)}
          content={this.renderTitle()}
          icon={TypeConstants.icons.edit} />
        {this.renderBody()}
      </div>
    );
  }
}
