class ProfileOptions extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.defaults.card,
        {
          padding: '24px',
          marginTop: '12px',
        }
      ),
      row: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '24px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    ProfileActions.storeOverlay(
      true,
      TypeConstants.overlay.type.edit,
      this.props.target
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderAttribute(attribute, index) {
    return (
      <div key={index} style={this.styles.row}>
        <h4>{attribute}</h4>
        <Clickable
          content={'Edit'}
          action={() => this.showOverlay()}
          type={'h4'} />
      </div>
    );
  }

  renderAttributes() {
    var profile = this.props.profile;
    var attributes = [
      `First name: ${profile.first_name}`,
      `Last name: ${profile.last_name}`,
      `Birthday: ${profile.birthday}`,
      `Email: ${profile.email}`,
    ];
    return attributes.map((attribute) => this.renderAttribute(attribute));
  }

  render() {
    var profile = this.props.profile;
    return (
      <div style={this.styles.container}>
        {this.renderAttributes()}
        <div style={this.styles.row}>
          <h4>{'Password: **********'}</h4>
        </div>
      </div>
    );
  }
}

