class SchoolCard extends Component {

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
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          width: '50%',
          height: '512px',
          marginTop: '1%',
        }
      ),
      image: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        margin: '20px 0px',
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '12px',
        flex: '1',
      },
    };
  }

  render() {
    var school = this.props.school;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => SchoolActions.storeOverlay(true, TypeConstants.overlay.type.edit)}
          content={school.name}
          icon={TypeConstants.icons.edit} />
        <div style={this.styles.section}>
          <img
            src='http://www.wlac.edu/WLAC/media/images/highschool/highschool-index.jpg'
            style={this.styles.image} />
          <h3>{`School Address: ${school.address}`}</h3>
          <h3>{`Counselor Name: ${school.counselor_name}`}</h3>
          <h3>{`Counselor Email: ${school.counselor_email}`}</h3>
      </div>
      </div>
    );
  }
}
