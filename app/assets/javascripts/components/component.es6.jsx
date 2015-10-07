class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.constructor.defaultState;
  }

  static get propTypes() {
    return {};
  }

  static get defaultProps() {
    return {};
  }

  static get defaultState() {
    return {};
  }

  get styles() {
    return {};
  }

  render() {
    return <div></div>;
  }
}
