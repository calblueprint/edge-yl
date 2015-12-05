class UsersCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      user: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      user: {},
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.grid,
        {
          flexFlow: 'row',
          justifyContent: 'flex-start',
        }
      ),
      image: {
        width: '122px',
        height: '122px',
        borderRadius: '50%',
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        flex: '1',
        paddingLeft: '24px',
      },
    };
  }

  get clickableStyles() {
    return {
      hover: {
        textDecoration: 'underline',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var user = this.props.user;
    return (
      <div style={this.styles.container}>
        <Clickable
          styles={this.clickableStyles}
          route={RouteConstants.users.show(user.id)}
          type={'img'}>
          <img
            src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'
            style={this.styles.image} />
        </Clickable>
        <div style={this.styles.section}>
          <Clickable
            content={`${user.first_name} ${user.last_name}`}
            route={RouteConstants.users.show(user.id)}
            styles={this.clickableStyles}
            type={'h3'} />
          <h6>{`${user.first_name} ${user.last_name}`}</h6>
          <h6>{`${user.birthday}`}</h6>
          <h6>{`${user.email}`}</h6>
        </div>
      </div>
    );
  }
}

