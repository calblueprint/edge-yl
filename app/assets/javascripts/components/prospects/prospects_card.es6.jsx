class ProspectsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      prospect: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteProspect() {
    ProspectsActions.deleteProspect(this.props.prospect.id);
  }

  generateOptions() {
    return [
      {
        action: () => this.deleteProspect(),
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
          content={'Prospect'}
          options={this.generateOptions()} />
      );
    } else {
      return <CardHeader content={'Prospect'} />;
    }
  }

  render() {
    var prospect = this.props.prospect;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        {this.renderHeader()}
        <div style={StyleConstants.cards.content}>
          <CardAttribute
            label={'Name'}
            type={'h4'}
            value={prospect.name} />
          <CardAttribute
            label={'Website'}
            value={prospect.website} />
          <CardAttribute
            label={'Contact name'}
            value={`${prospect.contact_first_name} ${prospect.contact_last_name}`} />
          <CardAttribute
            label={'Contact email'}
            value={prospect.contact_email} />
          </div>
      </div>
    );
  }
}
