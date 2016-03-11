class DropdownChoices extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      choices: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          action: React.PropTypes.func,
          children: React.PropTypes.node,
          content: React.PropTypes.string,
          route: React.PropTypes.string,
          static: React.PropTypes.bool,
        })
      ).isRequired,
      hide: React.PropTypes.func,
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
      hide: null,
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
    if (this.props.hide) {
      this.props.hide();
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChoice(choice, index) {
    var action = (event) => {
      if (this.props.hide) {
        this.props.hide();
      }
      choice.action(event);
    };
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
        action={action}
        children={choice.children}
        content={Helpers.humanize(choice.content)}
        key={index}
        route={choice.route}
        styles={styles}
        type={choice.children ? 'div' : 'p'}
        underline={false} />
    );
  }

  renderChoices() {
    var choices = this.props.choices;
    return choices.map((choice, index) => this.renderChoice(choice, index));
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
