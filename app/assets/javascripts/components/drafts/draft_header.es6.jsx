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
  // Render
  // --------------------------------------------------
  render() {
    var draft = this.props.draft;
    return (
      <div style={StyleConstants.cards.wrapper('small')}>
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
