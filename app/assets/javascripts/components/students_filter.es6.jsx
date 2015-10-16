class StudentsFilter extends Component {

  static get propTypes() {
    return {
      isExpanded: React.PropTypes.bool.isRequired,
      filterList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
      selected: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      isExpanded: false,
      filterList: [],
      selected: 'None',
    };
  }

  handleSelect(item) {
    function select() {
      this.setState({ selected: item });
    }
    return select.bind(this)
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        height: '40px',
      },
      action: {
        height: '100px',
        backgroundColor: 'blue',
      },
    };
  }

  renderListItem(item) {
    return (
      <Clickable
        func={this.handleSelect(item)}>
        <div>{item}</div>
      </Clickable>
      );
    }

  renderListItems() {
    return this.props.filterList.map(this.renderListItem.bind(this));
  }

  render() {
    var style = Object.assign(
      {},
      this.styles.container,
      this.styles.isExpanded && this.styles.expanded
    );
    return (
      <div styles={this.styles.container}>
        <div>
          <span>{this.state.selected}</span>
          <i className="fa fa-angle-down"></i>
        </div>
        <div style={style}>
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>
    );
  }
}