class ProfileOptions extends Component {

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
        fontSize: '16px',
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
        fontSize: '16px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style= {this.styles.row}>
          <span style={this.styles.field}>
            {'Email: soniayangsux@edgeyl.org'}
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

