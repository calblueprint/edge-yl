class ResponsibilitiesCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      user: React.PropTypes.object.isRequired,
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
        padding: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
      </div>
    );
  }
}
