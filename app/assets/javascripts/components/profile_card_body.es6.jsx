class ProfileCardBody extends React.Component {

  static get propTypes() {
    return {
      cardBody: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      cardBody: '',
    };
  }

  get styles() {
    return {
      container: {
        position: 'relative',
        padding: '12px',
        height: '186px',
      },
    };
  }
  
  render() {
    return (
      <div style={this.styles.container}>
        {this.props.cardBody}
      </div>
    );
  }
}

