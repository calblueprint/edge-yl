class DropdownChoices extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func,
      choices: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          action: React.PropTypes.func,
          children: React.PropTypes.node,
          content: React.PropTypes.string,
          route: React.PropTypes.string,
          static: React.PropTypes.bool,
        })
      ).isRequired,
      styles: React.PropTypes.shape({
        child: React.PropTypes.shape({
          default: React.PropTypes.object,
          hover: React.PropTypes.object,
        }),
        container: React.PropTypes.object,
      }),
    };
  }

  static get defaultProps() {
    return {
      action: null,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      input: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '0px',
        height: '0px',
        padding: '0px',
        border: '0px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    input.onblur = () => this.handleBlur();
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleBlur() {
    if (this.props.action) {
      this.props.action();
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChoice(choice, index) {
    var styles = Object.assign({}, this.props.styles.child);
    if (index > 0) {
      styles.default = Object.assign(
        {},
        styles.default,
        { borderTop: `1px solid ${StyleConstants.colors.gray}` }
      );
    }
    if (choice.static) {
      styles.default = Object.assign(
        {},
        styles.default,
        {
          textAlign: 'right',
        }
      );
      styles.hover = {};
    }
    return (
      <Clickable
        action={choice.action}
        children={choice.children}
        content={choice.content}
        key={index}
        route={choice.route}
        styles={styles}
        type={choice.children ? 'div' : 'h6'}
        underline={false} />
    );
  }

  renderChoices() {
    var choices = this.props.choices;
    return choices.map((choice, index) => this.renderOption(choice, index));
  }

  render() {
    return (
      <div style={this.props.styles.container}>
        {this.renderChoices()}
        <input
          autoFocus={true}
          ref={'input'}
          style={this.styles.input} />
      </div>
    );
  }
}
