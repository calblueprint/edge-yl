class StudentGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        flex: '1',
        padding: '0px 12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <StudentCard
          target={TypeConstants.overlay.target.preview}
          type={TypeConstants.overlay.type.edit}
          {...this.props} />
        <StudentCard
          target={TypeConstants.overlay.target.contact}
          type={TypeConstants.overlay.type.edit}
          {...this.props} />
        <StudentCard
          target={TypeConstants.overlay.target.parent}
          type={TypeConstants.overlay.type.edit}
          {...this.props} />
        <StudentCard
          target={TypeConstants.overlay.target.conference}
          type={TypeConstants.overlay.type.edit}
          {...this.props} />
      </div>
    );
  }
}
