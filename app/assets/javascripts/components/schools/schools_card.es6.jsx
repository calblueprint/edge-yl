class SchoolsCard extends Component {

static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      school: null,
    };
  }

  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          alignItems: 'center',
          width: '49%',
          height: '24%',
          padding: '24px',
          marginTop: '2%',
          boxSizing: 'border-box',
        }
      ),
      image: {
        width: '122px',
        height: '122px',
        borderRadius: '50%',
      },
      info: {
        paddingLeft: '24px',
      },
    };
  }

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
        <img
          src='http://www.wlac.edu/WLAC/media/images/highschool/highschool-index.jpg'
          style={this.styles.image} />
        <div style={this.styles.info}>
          <Clickable
            content={`${school.name}`}
            route={RouteConstants.schools.show(school.id)}
            styles={this.clickableStyles}
            type={'h3'} />
          <h6>{`${school.address}`}</h6>
        </div>
      </div>
    );
  }
}
