class GroupLeadershipEdit extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      groupables: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(field) {
    var state = {};
    return(event) => {
      GroupActions.storeAttribute(field, event.target.value);
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    console.log(this.props.groupables);
    return (
      <div style={StyleConstants.cards.body}>
        <CardDropdown />
      </div>
    );
  }
}
