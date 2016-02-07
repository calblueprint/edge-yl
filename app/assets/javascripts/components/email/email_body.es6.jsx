class EmailBody extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          padding: '24px',
          marginTop: '12px',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var email = this.props.email;
    return (
      <div style={this.styles.container}>
        <h6>{'Subject'}</h6>
        <p>{email.subject}</p>
        <h6>{'Content'}</h6>
        <p>{email.content}</p>
      </div>
    );
  }
}
