class Dropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      blur: React.PropTypes.func,
      options: React.PropTypes.arrayOf(React.PropTypes.shape({
        action: React.PropTypes.func,
        children: React.PropTypes.node,
        content: React.PropTypes.string,
        route: React.PropTypes.string,
        static: React.PropTypes.boolean,
      })).isRequired,
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
      blur: null,
      options: [],
      styles: {
        child: {
          default: {},
          hover: {},
        },
        container: {},
      },
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      input: {
        width: '0px',
        height: '0px',
        border: '0px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    input.addEventListener('blur', (event) => this.handleBlur(event));
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleBlur(event) {
    this.props.blur(event);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOption(option, index) {
    var styles = Object.assign({}, this.props.styles.child);
    if (index > 0) {
      styles.default = Object.assign(
        {},
        styles.default,
        {
          borderTop: '1px solid',
          borderColor: StyleConstants.colors.gray
        }
      );
    }
    if (option.static) {
      styles.default = Object.assign(
        {},
        styles.default,
        {
          textAlign: 'right',
        }
      );
      styles.hover = {};
    }
    if (option.children) {
      return (
        <Clickable
          action={option.action}
          key={index}
          route={option.route}
          styles={styles}
          type={'div'}>
          {option.children}
        </Clickable>
      );
    } else {
      return (
        <Clickable
          action={option.action}
          content={option.content}
          key={index}
          route={option.route}
          styles={styles}
          type={'span'} />
      );
    }
  }

  renderOptions() {
    return this.props.options.map((option, index) => this.renderOption(option, index));
  }

  render() {
    return (
      <div style={this.props.styles.container}>
        {this.renderOptions()}
        <input
          autoFocus={true}
          ref={'input'}
          style = {this.styles.input} />
      </div>
    );
  }
}
