class UserLeadership extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      user: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderGroup() {
    var leadership = this.props.user.leadership;
    if (leadership) {
      if (leadership.group) {
        return (
          <CardAttribute
            label={'Group'}
            value={leadership.group.full_name} />
        );
      }
    } else {
      return (
        <CardAttribute
          label={'Group'}
          value={'n/a'} />
      );
    }
  }

  renderLeadership() {
    var leadership = this.props.user.leadership;
    if (leadership) {
      return (
        <CardAttribute
          label={'Leadership Type'}
          value={leadership.style} />
      );
    } else {
      return (
        <CardAttribute
          label={'Leadership Type'}
          value={'n/a'} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader content={`Leadership Information`} />
        <div style={StyleConstants.cards.body}>
          {this.renderLeadership()}
          {this.renderGroup()}
        </div>
      </div>
    );
  }
}
