class StudentPreviewEdit extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
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
        alignItems: 'center',
        padding: '18px',
      },
      image: {
        width: '128px',
        height: '128px',
        borderRadius: '50%',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(field) {
    var state = {};
    return(event) => {
      StudentActions.storeAttribute(field, event.target.value);
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    return (
      <div style={this.styles.container}>
        <img
          src={'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'}
          style={this.styles.image} />
        <CardInput
          action={this.generateHandler('first_name')}
          placeholder={'First name'}
          value={template.first_name} />
        <CardInput
          action={this.generateHandler('last_name')}
          placeholder={'Last name'}
          value={template.last_name} />
        <CardInput
          action={this.generateHandler('birthday')}
          placeholder={'Birthday'}
          value={template.birthday} />
      </div>
    );
  }
}
