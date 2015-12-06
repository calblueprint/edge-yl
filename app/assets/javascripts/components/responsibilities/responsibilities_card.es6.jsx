class ResponsibilitiesCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      responsibility: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      responsibility: {},
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
          alignItems: 'center',
          width: '49%',
          height: '24%',
          padding: '24px',
          marginTop: '12px',
          boxSizing: 'border-box',
        }
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var responsibility = this.props.responsibility;
    return (
      <div style={this.styles.container}>
        {responsibility.id}
        {responsibility.status}
        {responsibility.student.first_name}
        {responsibility.student.last_name}
      </div>
    );
  }
}
