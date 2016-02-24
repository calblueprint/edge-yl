class FormHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      page: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          padding: '36px',
          marginTop: '12px',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var page = this.props.page;
    return (
      <div style={this.styles.container}>
        <h1>{page.title}</h1>
        <h5>{page.description}</h5>
      </div>
    );
  }
}
