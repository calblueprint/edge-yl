class ThreadCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      thread: React.PropTypes.object.isRequired,
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
    return (
      <div style={this.styles.container}>
        <h6>{'Subject'}</h6>
        <p>{this.props.thread.subject}</p>
      </div>
    );
  }
}
