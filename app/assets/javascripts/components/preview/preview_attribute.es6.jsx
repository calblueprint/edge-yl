class PreviewAttribute extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      question: React.PropTypes.object.isRequired,
    };
  }

  render() {
    var question = this.props.question;
    return (
      <div>
        <h5>{question.title}</h5>
        <h5>{question.value}</h5>
      </div>
    );
  }
}
