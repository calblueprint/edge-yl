class ProfileGrid extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        paddingLeft: '232px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
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
