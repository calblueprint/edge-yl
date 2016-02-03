class DraftHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      draft: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
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
    var draft = this.props.draft;
    return (
      <div style={this.styles.container}>
        <h6>{'From'}</h6>
        <p>{draft.from}</p>
        <CardInput
          action={() => console.log('typing')}
          label={'To'}
          type={'text'}
          value={draft.to} />
      </div>
    );
  }
}
