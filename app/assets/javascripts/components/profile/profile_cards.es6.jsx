class ProfileCards extends Component {

  static get propTypes() {
    return {
      currentUser: React.PropTypes.object.isRequired,
    }
  }

  static get defaultProps() {
    return {
      currentUser: '',
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
        <ProfilePreview {...this.props} />
        <ProfileOptions {...this.props} />
      </div>
    );
  }
}
