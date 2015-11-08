class ProfilePreview extends Component {

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
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          padding: '24px 0px',
          marginTop: '2%',
        }
      ),
      image: {
        width: '312px',
        borderRadius: '50%',
        marginTop: '4%',
      },
      name: {
        paddingTop: '24px',
        fontSize: StyleConstants.fonts.sizes.largest,
      },
      position: {
        paddingTop: '12px',
        fontSize: StyleConstants.fonts.sizes.small,
        fontStyle: 'italic',
      },
    };
  }

  render() {
    var currentUser = this.props.currentUser;
    return (
      <div style={this.styles.container}>
        <img
          src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'
          style={this.styles.image} />
        <span style={this.styles.name}>
          {currentUser.first_name + ' ' + currentUser.last_name}
        </span>
        <span style={this.styles.position}>
          {'Volunteer, Recruitment Group'}
        </span>
      </div>
    );
  }
}

