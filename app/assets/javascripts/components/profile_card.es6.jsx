class ProfileCard extends React.Component {

  get styles() {
    return {
      container: {
        position: 'relative',
        width: 300,
      },

    }
  }

  render () {
    return (
      <div style={this.styles.container}>
        profile card!
      </div>
    )
  }
}

