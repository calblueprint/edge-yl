class ProfileGrid extends Component {

  get styles() {
    return {
      container: {
        position: 'relative',
        width: '70%',
        padding: '10px',
        float: 'right',
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
