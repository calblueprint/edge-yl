class GroupCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      overlay: React.PropTypes.shape({
        active: React.PropTypes.bool.isRequired,
        type: React.PropTypes.string.isRequired,
      }).isRequired,
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      letter: '',
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      ConferenceActions.storeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createGroup() {
    var params = {
      conference_id: this.props.conference.id,
      letter: this.state.letter,
    }
    ConferenceActions.createGroup(params)
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.createGroup()}
          content={'New Group'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          <CardInput
            action={this.generateHandler('letter')}
            focus={true}
            label={'Group Letter'}
            margin={false}
            placeholder={'A'}
            value={''} />
        </div>
      </div>
    );
  }
}
