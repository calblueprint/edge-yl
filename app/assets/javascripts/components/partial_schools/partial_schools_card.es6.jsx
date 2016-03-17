class PartialSchoolsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deletePartialSchool() {
    PartialSchoolsActions.deletePartialSchool(this.props.school.id);
  }

  generateOptions() {
    return [
      {
        action: () => this.deletePartialSchool(),
        icon: TypeConstants.icons.delete,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderHeader() {
    if (this.props.editable) {
      return (
        <CardHeader
          content={'Partial School'}
          options={this.generateOptions()} />
      );
    } else {
      return <CardHeader content={'Partial School'} />;
    }
  }

  render() {
    var school = this.props.school;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        {this.renderHeader()}
        <div style={StyleConstants.cards.content}>
          <CardAttribute
            label={'Name'}
            type={'h4'}
            value={school.name} />
          <CardAttribute
            label={'Website'}
            value={school.website} />
          <CardAttribute
            label={'Contact name'}
            value={`${school.contact_first_name} ${school.contact_last_name}`} />
          <CardAttribute
            label={'Contact email'}
            value={school.contact_email} />
          </div>
      </div>
    );
  }
}
