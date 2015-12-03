class ProfileCards extends Component {

// --------------------------------------------------
// Props
// --------------------------------------------------
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


// --------------------------------------------------
// Styles
// --------------------------------------------------  
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
