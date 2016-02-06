class UserLeadership extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
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
          label={'Leadership type'}
          value={leadership.style} />
      );
    } else {
      return (
        <CardAttribute
          label={'Leadership type'}
          value={'n/a'} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.cards.content}>
        {this.renderLeadership()}
        {this.renderGroup()}
      </div>
    );
  }
}
