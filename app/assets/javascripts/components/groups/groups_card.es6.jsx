class GroupsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conferenceId: React.PropTypes.number.isRequired,
      group: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
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

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.cards.index}>
        <div style={this.styles.info}>
          <Clickable
            content={`Group ${this.props.group.name}`}
            route={RouteConstants.groups.show(this.props.conferenceId, this.props.group.id)}
            styles={this.clickableStyles}
            type={'h3'} />
        </div>
      </div>
    );
  }
}
