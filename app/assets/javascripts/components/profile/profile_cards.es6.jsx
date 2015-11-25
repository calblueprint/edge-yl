class ProfileCards extends Component {

  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
    }
  }

  static get defaultProps() {
    return {
      profile: {},
    }
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '0px 12px',
      },
    };
  }

  render() {
    return (
      <div style = {this.styles.container}>
        <ProfilePreview profile={this.props.profile} />
        <ProfileOptions profile={this.props.profile} />
      </div>
    );
  }
}
