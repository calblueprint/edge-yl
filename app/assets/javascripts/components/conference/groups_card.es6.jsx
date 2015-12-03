class GroupsCard extends Component {

static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      group: null,
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
    var group = this.props.group;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.info}>
          <Clickable
            content={`${group.name}`}
            route={RouteConstants.groups.show(group.id)}
            styles={this.clickableStyles}
            type={'h3'} />
        </div>
      </div>
    );
  }
}
