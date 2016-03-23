class StudentsSidebar extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      conferences: React.PropTypes.array.isRequired,
      filters: React.PropTypes.array.isRequired,
      sorts: React.PropTypes.array.isRequired,
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
        position: 'absolute',
        top: '0px',
        right: '0px',
        width: StyleConstants.widths.sidebar,
        paddingRight: '18px',
        textAlign: 'right',
        boxSizing: 'border-box',
      },
      title: {
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    return (
      <div style={this.styles.container}>
        <StudentsConference
          conference={this.props.conference}
          conferences={this.props.conferences} />
        <StudentsSorts sorts={this.props.sorts} />
        <StudentsFilters filters={this.props.filters} />
      </div>
    );
  }
}
