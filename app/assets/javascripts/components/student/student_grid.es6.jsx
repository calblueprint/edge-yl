class StudentGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      showOverlay: React.PropTypes.func.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      showOverlay: null,
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
          type={'preview'}
          {...this.props} />
        <StudentCard
          type={'contact'}
          {...this.props} />
        <StudentCard
          type={'parent'}
          {...this.props} />
        <StudentCard
          type={'conference'}
          {...this.props} />
      </div>
    );
  }
}
