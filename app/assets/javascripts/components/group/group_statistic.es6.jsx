class GroupStatistic extends Component {

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
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          label={'Females count'}
          value={group.females_count} />
        <CardAttribute
          label={'Males count'}
          value={group.males_count} />
        <CardAttribute
          label={'Others count'}
          value={group.others_count} />
      </div>
    );
  }
}
