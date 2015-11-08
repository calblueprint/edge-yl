class StudentComment extends Component {

  static get PropTypes() {
    return {
      comment: React.PropTypes.object.isRequired,
    };
  }

  static get DefaultProps() {
    return {
      comment: {},
    };
  }

  get clickableStyles() {
    return {
      default: {
        flex: '1',
        padding: '12px',
        marginTop: '12px',
        borderRadius: '1px',
        boxSizing: 'border-box',
        backgroundColor: 'red',
      },
      hover: {
        backgroundColor: StyleConstants.colors.turquoise,
      },
    };
  }

  renderComment() {
    return (
      <span>
        {this.props.comment}
      </span>);
  }

  render() {
    return (
      <Clickable
        styles={this.clickableStyles}
        content={this.renderComment()} />
    )
  }
}
