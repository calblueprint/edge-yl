class UsersCard extends Component {

  static get propTypes() {
    return {
      user: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      user: null,
    };
  }

  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          alignItems: 'center',
          width: '49%',
          height: '24%',
          padding: '24px',
          marginTop: '2%',
          boxSizing: 'border-box',
        }
      ),
      image: {
        width: '122px',
        height: '122px',
        borderRadius: '50%',
      },
      info: {
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

  render() {
    var user = this.props.user;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.info}>
          <h6>{`${user.first_name} ${user.last_name}`}</h6>
          <h6>{`${user.birthday}`}</h6>
          <h6>{`${user.email}`}</h6>
        </div>
      </div>
    );
  }
}

