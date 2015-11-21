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
          target={'preview'}
          type={'edit'}
          {...this.props} />
        <StudentCard
          target={'contact'}
          type={'edit'}
          {...this.props} />
        <StudentCard
          target={'parent'}
          type={'edit'}
          {...this.props} />
        <StudentCard
          target={'conference'}
          type={'edit'}
          {...this.props} />
      </div>
    );
  }
}
