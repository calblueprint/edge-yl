class StudentFilter extends Component {

  static get propTypes() {
    return {
      isExpanded: React.PropTypes.bool.isRequired,
      filterList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
      selected: React.Proptypes.string,
    };
  }

  static get defaultProps() {
    return {
      isExpanded: false,
      filterList: [],
      selected: 'None',
    };
  }

  select(item) {
    this.props.selected = item;
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        height: '40px',
      },
      expanded: {
        flex: 1,
        position: relative,
      },
    };
  }

  renderListItems() {
    var items = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var item = this.props.list[i];
      items.push(
        <div onClick={this.select.bind(null, item)}>
          <span>{item}</span>
        </div>
      );
    }
    return items;
  }

  render () {
    var style = Object.assign(
      {},
      this.styles.container,
      this.styles.isExpanded && this.styles.expanded
    )
    return (
      <div styles={container}>
        <div>
          <span> {this.props.selected} </span>
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