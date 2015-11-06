class ProfileOptions extends Component {

  static get propTypes() {
    return {
      currentUser: React.PropTypes.object.isRequired,
    }
  }

  static get defaultProps() {
    return {
      currentUser: {},
    }
  }

  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          padding: '24px',
          marginTop: '2%',
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

  render() {
    var currentUser = this.props.currentUser;
    return (
      <div style={this.styles.container}>
        <div style= {this.styles.row}>
          <span style={this.styles.field}>
            {'Email: ' + currentUser.email}
          </span>
          <Clickable
            content={'Change'}
            route={RouteConstants.pages.profile}
            styles={this.clickableStyles} />
        </div>
        <div style= {this.styles.row}>
          <span style={this.styles.field}>
            {'Password: **********'}
          </span>
          <Clickable
            content={'Change'}
            route={RouteConstants.pages.profile}
            styles={this.clickableStyles} />
        </div>
      </div>
    );
  }
}

