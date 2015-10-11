class ProfileGrid extends Component {

  static get propTypes() {
    return {
      shouldShow: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      shouldShow: true,
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 12px',
        transition: 'padding 0.5s ease-out',
      },
      notShow: {
        paddingLeft: '0px',
      },
    };
  }

  render() {
    var style = Object.assign(
      {},
      this.styles.container,
      !this.props.shouldShow && this.styles.notShow
    );
    return (
      <div style={style}>
        <ProfileCard
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
      </div>
    );
  }
}
