class ConferenceGrid extends Component {

  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      conference: {},
    };
  }

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

  render() {
    return (
      <div style={this.styles.container}>
        <ConferenceCard
          conference={this.props.conference}/>
      </div>
    );
  }
}
