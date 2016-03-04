class PreviewAttribute extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      question: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderValue() {
    var question = this.props.question;
    var value = question.value ? question.value : 'n/a';
    return <p>{value}</p>;
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h6>{this.props.question.title}</h6>
        {this.renderValue()}
      </div>
    );
  }
}
