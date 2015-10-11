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
        flex: 1,
        position: 'relative',
        padding: 12,
        height: 186,
      },
    };
  }
  
  render() {
    return (
      <div style={this.styles.container}>
        <span>{this.props.cardBody}</span>
      </div>
    );
  }
}

