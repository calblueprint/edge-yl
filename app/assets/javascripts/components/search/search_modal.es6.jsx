class SearchModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      model: React.PropTypes.string.isRequired,
      pairing: React.PropTypes.object.isRequired,
      savedSearch: React.PropTypes.object.isRequired,
      search: React.PropTypes.object.isRequired,
      results: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      GroupActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  addStudent() {
    GroupActions.addStudent(this.props.pairing.id,
      this.props.savedSearch.searchable_id);
  }

  generateOptions() {
    return [
      {
        action: () => this.addStudent(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  updateStudent() {
    StudentActions.updateStudent(this.props.pairing);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <h2>{'Add Student'}</h2>
        {this.renderBody()}
      </div>
    );
  }

  renderBody() {
    var header = null;
    if (this.props.model == 'student') {
        header = <CardHeader
          content={'Add a Student'}
          options={this.generateOptions()} />
    }
    return (
      <div style={this.styles.section}>
        {header}
        <div style={StyleConstants.cards.content}>
          {this.renderChild()}
        </div>
      </div>
    );
  }

  renderChild() {
    var pairing = this.props.pairing;
    if (pairing.type === 'search') {
      return (
        <CardSearchInput
          errors={pairing.errors[pairing.key]}
          extras={{groupId: pairing.id}}
          focus={true}
          label={"Add a Student"}
          type={'search'}
          savedSearch={this.props.savedSearch}
          search={this.props.search}
          results={this.props.results}
          value={pairing.value} />
      );
    }
  }
}
