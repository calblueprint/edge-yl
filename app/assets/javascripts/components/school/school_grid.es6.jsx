class SchoolGrid extends Component {

 // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      school: {},
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
        justifyContent: 'space-around',
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
        <SchoolCard
          school={this.props.school}/>
      </div>
    );
  }
}
