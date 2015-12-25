class ResponsibilitiesCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      responsibility: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var responsibility = this.props.responsibility;
    return (
      <div style={StyleConstants.cards.index('large')}>
        <h5>{`Responsibility ID: ${responsibility.id}`}</h5>
        <h5>{`Status: ${responsibility.status}`}</h5>
        <h5>{`${responsibility.student.first_name} ${responsibility.student.last_name}`}</h5>
      </div>
    );
  }
}
