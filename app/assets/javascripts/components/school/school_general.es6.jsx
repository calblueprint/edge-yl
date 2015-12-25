class SchoolGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var school = this.props.school;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          label={'Name'}
          value={school.name} />
        <CardAttribute
          label={'Address one'}
          value={school.address_one} />
        <CardAttribute
          label={'Address two'}
          value={school.address_two} />
        <CardAttribute
          label={'Address city'}
          value={school.address_city} />
        <CardAttribute
          label={'Address state'}
          value={school.address_state} />
        <CardAttribute
          label={'Address zip'}
          value={school.address_zip} />
      </div>
    );
  }
}
