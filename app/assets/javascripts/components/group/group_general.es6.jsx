class GroupGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          label={'Primary leader'}
          value={group.primary_leader} />
        <CardAttribute
          label={'Secondary leader'}
          value={group.secondary_leader} />
      </div>
    );
  }
}
