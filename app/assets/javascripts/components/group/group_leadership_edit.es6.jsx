class GroupLeadershipEdit extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
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
    var template = this.props.template;
    return (
      <div style={StyleConstants.cards.body}>

      </div>
    );
  }
}
