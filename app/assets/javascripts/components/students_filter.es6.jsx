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

  handleExpand() {
    this.setState({ isExpanded: !this.state.isExpanded })
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
        flex: '1',
        flexDirection: 'column',
        height: '36px',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        overflow: 'hidden',
      },
      expanded: {
        height: '100px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        height: '36px',
        color: 'blue',
      },
    };
  }

  renderListItem(item) {
    return (
      <Clickable
        func={this.handleSelect(item)}
        styles={this.clickableStyles}>
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
      this.state.isExpanded && this.styles.expanded
    );
    return (
      <div style={style}>
        <Clickable
          func={this.handleExpand.bind(this)}
          styles={this.clickableStyles}>
          <span>{this.state.selected || this.props.selected}</span>
          <i className="fa fa-angle-down"></i>
        </Clickable>
        <div style={style}>
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>
    );
  }
}