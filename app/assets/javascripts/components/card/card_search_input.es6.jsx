class CardSearchInput extends Component {
  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      errors: React.PropTypes.array,
      extras: React.PropTypes.object,
      focus: React.PropTypes.bool,
      label: React.PropTypes.string.isRequired,
      margin: React.PropTypes.bool,
      placeholder: React.PropTypes.string,
      type: React.PropTypes.string,
      results: React.PropTypes.array,
      savedSearch: React.PropTypes.object.isRequired,
      search: React.PropTypes.object.isRequired,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      errors: [],
      extras: {},
      focus: false,
      margin: false,
      placeholder: '',
      results: [],
      type: 'text',
      value: '',
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        {
          display: 'flex',
          flexFlow: 'column',
          alignSelf: 'stretch',
        },
        this.props.margin && { marginTop: '12px' }
      ),
      error: {
        color: StyleConstants.colors.red,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderError() {
    var errors = this.props.errors;
    if (errors && errors.length) {
      return (
        <h6 style={this.styles.error}>
          {errors[0]}
        </h6>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <StudentSearchInput
          pagination={{current: 1, limit: 1}}
          conferenceId={this.props.extras.conferenceId}
          groupId={this.props.extras.groupId}
          results={this.props.results}
          savedSearch={this.props.savedSearch}
          search={this.props.search} />
        {this.renderError()}
      </div>
    );
  }

}
