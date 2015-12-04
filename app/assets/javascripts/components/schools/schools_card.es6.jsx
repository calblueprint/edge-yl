class SchoolsCard extends Component {

static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get defaultProps() {
    return {
      school: null,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          width: '49%',
          height: '24%',
          padding: '24px',
          marginTop: '2%',
          boxSizing: 'border-box',
        }
      ),
    };
  }

// --------------------------------------------------
  // Render
  // --------------------------------------------------
  get clickableStyles() {
    return {
      hover: {
        textDecoration: 'underline',
      },
    };
  }

  render() {
    var school = this.props.school;
    return (
      <div style={this.styles.container}>
        <Clickable
          content={`${school.name}`}
          route={RouteConstants.schools.show(school.id)}
          styles={this.clickableStyles}
          type={'h3'} />
        <h6>{`${school.address}`}</h6>
      </div>
    );
  }
}
