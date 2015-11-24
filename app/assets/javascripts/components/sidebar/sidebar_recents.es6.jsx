class SidebarRecents extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      label: React.PropTypes.string.isRequired,
      icon: React.PropTypes.string.isRequired,
      route: React.PropTypes.string.isRequired,
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
      },
      border: {
        marginTop: '16px',
        borderBottom: '1px solid',
        borderColor: StyleConstants.colors.gray,
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        flex: '1',
        padding: '12px',
        marginTop: '16px',
        borderRadius: '1px',
        boxSizing: 'border-box',
      },
      hover: {
        backgroundColor: StyleConstants.colors.turquoise,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          content = {'Previous Student'}
          styles={this.clickableStyles}
          route = {RouteConstants.students.show(1)}/>   
        <Clickable
          content = {'Previous School'}
          styles={this.clickableStyles}
          route = {RouteConstants.schools.show(1)}/>             
        <div style={this.styles.border} />
      </div>
    );
  }
}

