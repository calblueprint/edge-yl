class GroupCreateModal extends CreateModal {

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      ConferenceActions.storeOverlay(false);
    }
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
      <div style={this.styles.container}>
        <CardHeader
          action={() => this.createComment()}
          content={'New Group'}
          icon={TypeConstants.icons.save} />
        <div style={this.styles.form}>
          <CardInput
            action={this.generateHandler('letter')}
            focus={true}
            margin={false}
            placeholder={'A'}
            value={''} />
        </div>
      </div>
    );
  }
}
