class VolunteerLeadership extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      volunteer: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderGroup() {
    var leadership = this.props.volunteer.leadership;
    if (leadership) {
      if (leadership.group) {
        return (
          <CardAttribute
            label={'Group'}
            type={'h5'}
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
    var leadership = this.props.volunteer.leadership;
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
