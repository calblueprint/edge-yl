class ResponsibilitiesCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      user: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      user: {},
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        flex: '1',
        padding: '12px',
      },
      responsibilities: {
        overflow: 'scroll',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderResponsibilities() {
    var responsibilities = this.props.user.responsibilities;
    if (responsibilities.length) {
      return (
        <div style={this.styles.responsibilities} >
          {responsibilities.map((responsibility) => this.renderResponsibility(responsibility))}
        </div>
      );
    }
  }

  renderResponsibility(responsibility) {
    return (
      <div key={responsibility.id}>
        {responsibility.id}
        {responsibility.status}
        {responsibility.student.first_name}
      </div>
    );
  }

  render() {
    var user = this.props.user;
    return (
      <div style={this.styles.container}>
        {this.renderResponsibilities()}
      </div>
    );
  }
}
