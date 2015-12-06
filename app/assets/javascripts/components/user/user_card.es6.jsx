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
  showOverlay() {
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
      case 'responsibilities':
        return <ResponsibilitiesCard user={this.props.user} />;
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case 'responsibilities':
        return 'Responsibilities';
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
