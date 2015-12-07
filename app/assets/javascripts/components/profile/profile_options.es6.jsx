class ProfileOptions extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
    }
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
      field: {
        alignSelf: 'flex-start',
        flex: '1',
        fontSize: StyleConstants.fonts.sizes.small,
      },
      row: {
        display: 'flex',
        paddingTop: '24px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'flex',
        alignSelf: 'flex-end',
        fontSize: StyleConstants.fonts.sizes.small,
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay(event) {
    ProfileActions.storeOverlay(
      true,
      TypeConstants.overlay.type.edit,
      this.props.target
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var profile = this.props.profile;
    return (
      <div style={this.styles.container}>
        <div style= {this.styles.row}>
          <span style={this.styles.field}>
            {`Name: ${profile.first_name} ${profile.last_name}`}
          </span>
          <Clickable
            content={'Edit'}
            action={(event) => this.showOverlay(event)}
            styles={this.clickableStyles} />
        </div>
        <div style= {this.styles.row}>
          <span style={this.styles.field}>
            {'Birthday: ' + profile.birthday}
          </span>
          <Clickable
            content={'Edit'}
            action={(event) => this.showOverlay(event)}
            styles={this.clickableStyles} />
        </div>
        <div style= {this.styles.row}>
          <span style={this.styles.field}>
            {'Email: ' + profile.email}
          </span>
          <Clickable
            content={'Edit'}
            action={(event) => this.showOverlay(event)}
            styles={this.clickableStyles} />
        </div>
        <div style= {this.styles.row}>
          <span style={this.styles.field}>
            {'Password: **********'}
          </span>
          <Clickable
            content={'Edit'}
            action={(event) => this.showOverlay(event)}
            styles={this.clickableStyles} />
        </div>
      </div>
    );
  }
}

