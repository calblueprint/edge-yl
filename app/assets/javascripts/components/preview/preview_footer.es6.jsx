class PreviewFooter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      id: React.PropTypes.string,
      target: React.PropTypes.string.isRequired,
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
          justifyContent: 'center',
          padding: '36px',
          margin: '12px 0px 24px',
        },
      ),
      rightButton: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-end',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  submitSubmission() {
    PreviewActions.submitSubmission(
      this.props.target,
      this.props.id,
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.rightButton}>
          <FormButton
            action={() => this.submitSubmission()}
            content={'Submit'} />
        </div>
      </div>
    );
  }
}
