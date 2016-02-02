class DraftHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var email = this.props.email;
    return (
      <div style={StyleConstants.cards.wrapper('small')}>
        <h6>{'From'}</h6>
        <p>{email.from}</p>
        <CardInput
          action={() => console.log('typing')}
          label={'To'}
          type={'text'}
          value={email.to} />
      </div>
    );
  }
}
