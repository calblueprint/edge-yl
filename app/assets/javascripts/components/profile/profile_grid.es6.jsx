class ProfileGrid extends Component {

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
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
      },
    };
  }

// --------------------------------------------------
// Render
// --------------------------------------------------
  render() {
    return (
      <div style = {this.styles.container}>
        <ProfilePreview profile={this.props.profile} />
        <ProfileOptions profile={this.props.profile} />
      </div>
    );
  }
}
