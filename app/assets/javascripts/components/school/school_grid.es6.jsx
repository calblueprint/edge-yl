class SchoolGrid extends Component {

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

  render() {
    return (
      <div style={this.styles.container}>
        <SchoolCard
          school={this.props.school}/>
      </div>
    );
  }
}
