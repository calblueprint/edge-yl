class GroupGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
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
        flex: '1',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  render() {
    var group = this.props.group;
    return (
      <div style={this.styles.container}>
        <GroupCard group={group} />
        <StudentsGrid
          media={this.props.media}
          students={group.students} />
      </div>
    );
  }
}
